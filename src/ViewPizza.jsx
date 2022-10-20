import { useParams } from "react-router-dom";

import { Card } from "react-bootstrap";

import "./ViewPizza.css";

const ViewPizza = ({ orders }) => {
  const { pizzaId, orderId } = useParams();
  const orderResults = orders.filter((order) => order.id === orderId);

  if (!orderResults || orderResults.length === 0) {
    return <p>no orders available</p>;
  }
  const order = orderResults[0];

  const pizzaResults = order.basket.filter(
    (pizza) => pizza.id === pizzaId
  );

  if (!pizzaResults || pizzaResults.length === 0) {
    return <p>no pizzas available</p>;
  }

  const pizza = pizzaResults[0];

  const toppingsList = pizza.toppings;

  return (
    <Card className="pizzaCard">
      <Card.Header className="boldText">Pizza {pizza.id}</Card.Header>
      <Card.Body>
        <Card.Text>
          <span className="boldText">Base:</span> {`${pizza.baseType}`}
        </Card.Text>
        <Card.Text>
          <Card.Text>
            <span className="boldText">Toppings:</span>
          </Card.Text>
          {Object.keys(toppingsList)
            .filter((key) => toppingsList[key].amount > 0)
            .map((key) => (
              <p key={key}>
                {`${toppingsList[key].id}: x${toppingsList[key].amount}`}
              </p>
            ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ViewPizza;
