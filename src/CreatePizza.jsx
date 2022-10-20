import { useState } from "react";

import { Form, Container, Button } from "react-bootstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { v4 as uuidv4 } from 'uuid';

import ToppingsList from "./ToppingsList";
import CreatePizzaSummary from "./CreatePizzaSummary";
import { useNavigate } from "react-router-dom";

const CreatePizza = ({ basket, changeBasket, pizzaToEdit, changePizzaToEdit }) => {
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

  const [formValues, changeFormValues] = useState(((pizzaToEdit) ? pizzaToEdit : defaultPizza));

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

  const navigate = useNavigate();

  const addToBasket = (event, formValues) => {
    event.preventDefault();
    if (pizzaToEdit) {
      const updatedBasket = basket.map((pizza) => {
        if (pizza.id === pizzaToEdit.id) {
          const target = pizza
          const source = formValues
          const updatedPizza = Object.assign(target, source)
          return updatedPizza
        } else {
          return pizza
        }
      })
      changeBasket(updatedBasket)
      localStorage.setItem("basket", JSON.stringify(updatedBasket));

      changePizzaToEdit()
      changeFormValues(defaultPizza);
      toastr["success"]("Pizza Updated!");
      navigate(`/basket`);
    } else {
      changeBasket([...basket, {...formValues, id: uuidv4()}]);
      localStorage.setItem("basket", JSON.stringify([...basket, formValues]));
      changeFormValues(defaultPizza);
      toastr["success"]("Pizza Added to Basket!");
      navigate(`/`);
    }
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
          {pizzaToEdit ? "Update Pizza" : "Add Pizza"}
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePizza;
