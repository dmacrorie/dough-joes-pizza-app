import { useState } from 'react';

// import Checkout from './Checkout'

const Orders = () => {
    const initialOrder = [
        {
          id: 0,
          title: 'First Post',
          message: 'Yay! First post',
          likes: 0,
        }
      ];
    
      const [orders, ViewOrder] = useState(initialOrder);
  //function maps through the basket array.
  //order details to show - time and date
  //function so order can be clicked on and full details seen (from original order) - Pizzas, address, date, price
  //function so we can see each individual pizza's ingredients, price and nutritional value




return (
    <>
    {orders.map((props)}
    </>
);
};

export default Orders;
