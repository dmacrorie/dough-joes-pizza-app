import { Card, Button } from "react-bootstrap";

const ToppingsList = ({ toppings, increaseTopping, decreaseTopping }) => {
  return Object.keys(toppings).map((toppingKey) => (
    <Card key={toppingKey}>
      <Card.Body>
        <Card.Title>{toppings[toppingKey].id} ({toppings[toppingKey].pencePerServing}p)</Card.Title>
        <Button
          onClick={() => decreaseTopping(toppings[toppingKey].id)}
        >
          Less
        </Button>
        <Card.Text>{toppings[toppingKey].amount}</Card.Text>
        <Button
          onClick={() => increaseTopping(toppings[toppingKey].id)}
        >
          More
        </Button>
      </Card.Body>
    </Card>
  ));
};

export default ToppingsList;
