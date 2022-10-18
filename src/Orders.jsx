// import Checkout from './Checkout'

const Orders = ({ orders }) => {
  //function maps through the basket array.
  //order details to show - time and date
  //function so order can be clicked on and full details seen (from original order) - Pizzas, address, date, price
  //function so we can see each individual pizza's ingredients, price and nutritional value

  return (
    <>
      {[...orders].map((order) => (
        <>
          <p>Order 1</p>
          <p>key={order.id}</p>
          <p>price={order.price}</p>
          <button>View order</button>
        </>
      ))}
    </>
  );
};

export default Orders;
