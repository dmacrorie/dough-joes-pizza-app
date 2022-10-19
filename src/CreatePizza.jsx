import { useState } from "react";

import { Form, Container, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import ToppingsList from "./ToppingsList";
import CreatePizzaSummary from "./CreatePizzaSummary";

const CreatePizza = ({ basket, changeBasket }) => {
  const listOfToppings = {
    tomato: {
      id: "Tomato",
      amount: 0,
    },
    ham: {
      id: "Ham",
      amount: 0,
    },
    pineapple: {
      id: "Pineapple",
      amount: 0,
    },
    cheese: {
      id: "Cheese",
      amount: 0,
    },
    mushroom: {
      id: "Mushroom",
      amount: 0,
    },
  };

  const defaultPizza = {
    id: "",
    baseType: "Regular",
    toppings: listOfToppings,
  };

  const [formValues, changeFormValues] = useState(defaultPizza);

  const increaseTopping = (id) => {
    const toppingsFormValues = { ...formValues.toppings };
    Object.keys(toppingsFormValues).forEach((key) => {
      if (
        id === toppingsFormValues[key].id &&
        toppingsFormValues[key].amount < 2
      ) {
        toppingsFormValues[key].amount =
          toppingsFormValues[key].amount + 1;
      }
    });
    changeFormValues({ ...formValues, toppings: toppingsFormValues });
  };

  const decreaseTopping = (id) => {
    const toppingsFormValues = { ...formValues.toppings };
    Object.keys(toppingsFormValues).forEach((key) => {
      if (
        id === toppingsFormValues[key].id &&
        toppingsFormValues[key].amount > 0
      ) {
        toppingsFormValues[key].amount =
          toppingsFormValues[key].amount - 1;
      }
    });
    changeFormValues({ ...formValues, toppings: toppingsFormValues });
  };

  const handleBaseTypeChange = (event) => {
    const newBaseType = { ...formValues };
    newBaseType[event.target.name] = event.target.value;
    changeFormValues(newBaseType);
  };

  const addToBasket = (event, formValues) => {
    event.preventDefault();
    changeBasket([...basket, formValues]);
    localStorage.setItem("basket", JSON.stringify([...basket, formValues]));
    changeFormValues(defaultPizza);
    toastr["success"]("Pizza Added to Basket!");
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Pizza Base</Form.Label>
          <Form.Select
            name="baseType"
            value={formValues.baseType}
            onChange={(event) => handleBaseTypeChange(event)}
          >
            <option value="Regular">Regular</option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Deep Pan">Deep Pan</option>
            <option value="Stuffed Crust">Stuffed Crust</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pizza Toppings</Form.Label>
          <ToppingsList
            toppings={formValues.toppings}
            decreaseTopping={decreaseTopping}
            increaseTopping={increaseTopping}
          />
        </Form.Group>
        <CreatePizzaSummary
          pizza={formValues}
        />
        <Button
          type="submit"
          onClick={(event) => addToBasket(event, formValues)}
        >
          Add Pizza
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePizza;
