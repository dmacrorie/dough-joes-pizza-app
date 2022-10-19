import { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import CreatePizza from './CreatePizza';
import Orders from "./Orders";
import ViewOrder from "./ViewOrder";
import ViewPizza from "./ViewPizza";
import Basket from './Basket';

const App = () => {

  const [orders] = useState([]);
  const [basket, changeBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  return (
    <Container>
      <Navbar bg="light" expand="md">
        <Navbar.Brand> PIZZA </Navbar.Brand>
        <p>🍕</p>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" />
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
            />
          }
        />
        <Route path="/basket" element={
          <Basket
            basket={basket}
          />
        }
        />
      </Routes>
    </Container>
  );
};

export default App;
