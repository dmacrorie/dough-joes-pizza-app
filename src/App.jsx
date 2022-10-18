import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Orders from "./Orders";

const fakeOrder = [
  {
    id: 0,
    base: "pan",
    topping: "pepperoni",
    price: 10,
  },
  {
    id: 1,
    base: "pan",
    topping: "ham",
    price: 11,
  },
];

const [orders] = useState(fakeOrder);

const App = () => (
  <div>
    <Navbar>
      <Navbar.Brand> PIZZA </Navbar.Brand>
      <p>🍕</p>
      <Link className="nav-link" to="/">
        Home
      </Link>
    </Navbar>

    <Routes>
      <Route path="/" />
    </Routes>
    <Orders orders={orders} />
  </div>
);

export default App;
