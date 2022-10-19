import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Orders from "./Orders";
import ViewOrder from "./ViewOrder";
import ViewPizza from "./ViewPizza";

const App = () => {

  const [orders] = useState([]);
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
      </Routes>
    </Container>
  );
};

export default App;
