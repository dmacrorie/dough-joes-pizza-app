import { useParams } from "react-router-dom";

const ViewPizza = ({ orders }) => {
    const { pizzaId, orderId } = useParams();
    const orderResults = orders.filter(
    (order) => order.id === Number(orderId)
    );

    // if (!orderResults || orderResults.length === 0) {
    // return <p>no orders available</p>;
    // }
    const order = orderResults[0];

    const pizzaResults = order.pizza.filter((pizza) => pizza.id === Number(pizzaId))

    if (!pizzaResults || pizzaResults.length === 0) {
        return <p>no pizzas available</p>;
        }

    const pizza = pizzaResults[0];

    console.log(pizza.toppings);

    return (
    <>
        <h3>Pizza {pizza.id}</h3>
        <p>Topping: {pizza.toppings}</p>
    </>
    );
};

export default ViewPizza;
