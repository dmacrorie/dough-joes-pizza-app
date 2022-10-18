import { useNavigate } from "react-router-dom";

const Orders = ({ orders }) => {
  const navigate = useNavigate();

  const handleOrderClick = (order) => {
    navigate(`/vieworder/${order.id}`)
  }

  return (
    <>
      {[...orders].map((order) => (
        <>
          <p>Order {order.id + 1}</p>
          <p>Date: {order.date}</p>
          <p>Price: £{order.price}</p>
          <button onClick={() => handleOrderClick(order)}>View order</button>
          <br />
          <br />
        </>
      ))}
    </>
  );
};

export default Orders;
