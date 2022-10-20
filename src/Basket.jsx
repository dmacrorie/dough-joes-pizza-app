import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PizzaToppingsSummary from "./PizzaToppingsSummary";

const Basket = ({ basket, changeBasket, changePizzaToEdit }) => {
  const navigate = useNavigate();
  const onEditClickHandler = (pizza, event) => {
    event.preventDefault();
    const pizzaToEdit = pizza;
    changePizzaToEdit(pizzaToEdit);
    navigate(`/createpizza`);
  };

  const onRemoveClickHandler = (id, event) => {
    event.preventDefault();
    const newBasket = basket.filter((pizza) => pizza.id !== id)
    changeBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  return basket.map((pizza) => (
    <Container key={pizza.id}>
      <Card key={pizza.id}>
        <Card.Header>{pizza.id}</Card.Header>
        <Card.Body>
          <p>Pizza Base: {pizza.baseType}</p>
          <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
          <Button onClick={(event) => onEditClickHandler(pizza, event)}>Edit Pizza</Button>
          <Button onClick={(event) => onRemoveClickHandler(pizza.id, event)}>
            Remove Pizza
          </Button>
        </Card.Body>
      </Card>
    </Container>
  ));
};

export default Basket;
