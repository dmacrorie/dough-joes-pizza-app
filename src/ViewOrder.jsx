import { Link, useParams } from "react-router-dom";

const ViewOrder = ({ orders }) => {
  const { orderId } = useParams();
  const results = orders.filter(
    (individualOrder) => individualOrder.id === Number(orderId)
  );

  if (!results || results.length === 0) {
    return <p>no orders available</p>;
  }
  const order = results[0];

  return (
    <>
      <h3>Order {order.id + 1}</h3>
      <p>Date: {order.date}</p>
      <p>Price: £{order.price}</p>
      <p>Address: {order.address}</p>
      <p>Topping: {order.topping}</p>
      <p>Nutrition: {order.nutrition}</p>
      <Link to="/vieworder/:orderId/:pizzaId">{order.pizza}</Link>
    </>
  );
};

export default ViewOrder;
