import './App.css';


import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Home from "./views/Home";
import Menu from "./views/Menu";
import Login from "./views/Login";
import Register from './views/Register';
import Checkout from './views/Menu/Checkout';

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
              <Link className='loginLink' to="/Login" >Login</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <Link className='checkoutLink' to="/Checkout" style={{ textDecoration: 'none' }}></Link>
            </Nav.Link>
          </Nav.Item>

          <a href='/'>
            <img src='https://www.redrobin.com/assets/images/RR_Logo.svg'
              style={{ width: '200px', height: '200px', position: 'absolute', left: '45%', top: '-4%' }}
              to="/"
            /></a>

          <a href='/checkout'>
            <img src='https://cdn-icons-png.flaticon.com/128/8091/8091819.png'
              style={{ width: '80px', height: '80px', position: 'relative', left: '1000%', top: '0%' }}
              to="/"
            /></a>

        </Nav>

      </Container>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        {/* <Route path="/Order" element={<Order/>}/> */}
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router >
  );
}

export default App;
