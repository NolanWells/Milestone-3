import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Home from "./views/Home";
import Menu from "./views/Menu";
import Order from "./views/Order";
import Login from "./views/Login";

function App() {
  return (
    <Router>
      <Container className='navBar'>

        <Nav className='navLinks'>

        <Nav.Item>
            <Nav.Link href="/">
              <Link className='homeLink' to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link className='menuLink' to="/Menu">Menu</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link className='orderLink' to="/Order" style={{textDecoration: 'none'}}>Order Now</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link className='loginLink' to="/Login" style={{textDecoration: 'none'}}>Login</Link>
            </Nav.Link>
          </Nav.Item>

          <img src='https://www.redrobin.com/assets/images/RR_Logo.svg' 
            style={{ width: '125px', height: '125px', position: 'absolute', left: '47%', top: '-3%'}}
          />

        </Nav>

      </Container>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Order" element={<Order/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
