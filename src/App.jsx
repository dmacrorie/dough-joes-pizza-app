import { Button, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'


const App = () => (
  <div>
    <Navbar>
      <Navbar.Brand> PIZZA </Navbar.Brand>
      <Button>🍕</Button>
      <Link className='nav-link' to="/">Home</Link>
    </Navbar>


    <Routes>
    <Route path="/" 
      />
      
    </Routes>
  </div>
)

export default App;