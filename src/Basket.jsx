import { Card, Container } from "react-bootstrap";

import PizzaToppingsSummary from "./PizzaToppingsSummary";

const Basket = ({ basket }) => {
  return basket.map((pizza) => (
    <Container key={pizza.id}>
      <Card key={pizza.id}>
        <Card.Header>{pizza.id}</Card.Header>
        <Card.Body>
          <p>Pizza Base: {pizza.baseType}</p>
          <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
        </Card.Body>
      </Card>
    </Container>
  ));
};

export default Basket;
