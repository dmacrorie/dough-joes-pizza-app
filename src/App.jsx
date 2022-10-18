import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'


const App = () => (
  <div>
    <Navbar>
      <Navbar.Brand> PIZZA </Navbar.Brand>
      <p>🍕</p>
      <Link className='nav-link' to="/">Home</Link>
    </Navbar>

    <Routes>
    <Route path="/" 
      />
      
    </Routes>
  </div>
)

export default App;