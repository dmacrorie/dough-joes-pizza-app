import { Card } from "react-bootstrap";

import PizzaToppingsSummary from "./PizzaToppingsSummary";

const CreatePizzaSummary = ({ pizza }) => (
    <Card key={pizza.id}>
        <Card.Header>{pizza.id}</Card.Header>
        <Card.Body>
            <p>Pizza Base: {pizza.baseType}</p>
            <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
        </Card.Body>
    </Card>
);

export default CreatePizzaSummary;