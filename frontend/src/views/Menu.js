import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import { Route } from 'react-router-dom';

import Salads from './Menu/Salads'
import Burgers from './Menu/Burgers'
import Dessert from './Menu/Dessert'
import Sides from './Menu/Sides'


export default function Menu(){
    return (
            <Container>
                 <Nav defaultActiveKey="/" variant="tabs" fill>
                    <Nav.Item href="/Salads">
                        <Link to='/Salads'>Salads</Link>
                    </Nav.Item>

                    <Nav.Item eventKey={"Burgers"}>
                        <Link to= "/Burgers">Burgers</Link>
                    </Nav.Item>

                    <Nav.Item eventKey={"Sides"}>
                        <Link to= "/Sides">Sides</Link>
                    </Nav.Item>

                    <Nav.Item eventKey={"Dessert"}>
                        <Link to= "/Dessert">Dessert</Link>
                    </Nav.Item>

                    <div className="display">
                        <Route path="/Salads" Component={Salads}/>
                        <Route path="/Burgers" Component={Burgers}/>
                        <Route path="/Sides" Component={Sides}/>
                        <Route path="/Dessert" Component={Dessert}/>
                    </div>

                </Nav>
            </Container>
    )
}