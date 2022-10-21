import { Card } from "react-bootstrap";

import PizzaToppingsSummary from "./PizzaToppingsSummary";
import { pizzaPriceSummary } from "./pizzaPriceSummary";
import { listOfBaseTypes } from "./basesAndToppingsConfig";
import AxiosNutrition from "./AxiosNutrition";

const CreatePizzaSummary = ({ pizza }) => (
  <Card key={pizza.id}>
    <Card.Header>Order Summary</Card.Header>
    <Card.Body>
      <p>Pizza Base: {listOfBaseTypes[pizza.baseType].id}</p>
      <PizzaToppingsSummary pizzaToppings={pizza.toppings} />
      <p>£{pizzaPriceSummary(pizza.baseType, pizza.toppings).toFixed(2)}</p>
    </Card.Body>
    <AxiosNutrition pizza={pizza} />
  </Card>
);

export default CreatePizzaSummary;
