import { Button, Navbar } from 'react-bootstrap';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout.jsx'

const App = () => (
  <div>
    <Navbar>
      <Navbar.Brand> PIZZA </Navbar.Brand>
      <Button>🍕</Button>
      <Link className='nav-link' to="/">Home</Link>
      <Link className='nav-link' to="/CreatePizza">CreatePizza</Link>
      <Link className='nav-link' to="/Orders">Orders</Link>
      <Link className='nav-link' to="/Checkout">Checkout</Link>
    </Navbar>


    <Routes>
    <Route path="/" 
      />

      <Route path="/CreatePizza" element={
        <CreatePizza />}
      />

      <Route path="/Orders" element={
        <Orders />}
      />

      <Route path="/Checkout" element={
        <Checkout />}
      />
    </Routes>
  </div>
)

export default App;