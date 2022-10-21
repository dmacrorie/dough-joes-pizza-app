import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';


import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import CreatePizza from './CreatePizza';
import Checkout from './Checkout.jsx'
import Orders from "./Orders";
import ViewOrder from "./ViewOrder";
import ViewPizza from "./ViewPizza";
import Basket from './Basket';

const App = () => {
  const [orders, changeOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);
  const [basket, changeBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const [pizzaToEdit, changePizzaToEdit] = useState();

  return (
    <Container>
      <Navbar bg="light" expand="md">
        <Navbar.Brand> PIZZA </Navbar.Brand>
        <div>🍕</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/orders">
              Orders
            </Link>
            <Link className='nav-link' to="/createpizza">Create Pizza</Link>
            <Link className="nav-link" to="/basket">
              Basket
            </Link>
            <Link className='nav-link' to="/Checkout">Checkout</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Routes>
        <Route path="/"/>
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route
          path="/vieworder/:orderId"
          element={<ViewOrder orders={orders} />}
        />
        <Route
          path="/vieworder/:orderId/:pizzaId"
          element={<ViewPizza orders={orders} />}
        />
        <Route path="/createpizza"
          element={
            <CreatePizza
              basket={basket}
              changeBasket={changeBasket}
              pizzaToEdit={pizzaToEdit}
              changePizzaToEdit={changePizzaToEdit}
            />
          }
        />
        <Route path="/basket" element={
          <Basket
            basket={basket}
            changeBasket={changeBasket}
            changePizzaToEdit={changePizzaToEdit}
          />
        }
        />
        <Route path="/Checkout" element={
          <Checkout basket={basket} changeBasket={changeBasket} orders={orders} changeOrders={changeOrders} />
        }
        />
      </Routes>
    </Container>
  );
};

export default App;
