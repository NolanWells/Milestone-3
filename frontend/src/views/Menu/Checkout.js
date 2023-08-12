import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import items from './food/items';
import { Card, CardImg, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import CheckoutBag from './CheckoutBag';

export default function Checkout() {
    const initialArray = JSON.parse(localStorage.getItem('bag')) || []
    const [bag, setBag] = useState(initialArray)    
    
    function handleCheckout() {
        localStorage.removeItem('bag')
        setBag([])
    }
        
    function removeItem(id) {
        const updatedBag = [...bag]; // Create a copy of the bag array
        const indexToRemove = updatedBag.indexOf(id)
    
        if (indexToRemove !== -1) {
            updatedBag.splice(indexToRemove, 1)
            setBag(updatedBag)
            localStorage.setItem('bag', JSON.stringify(updatedBag))
        }
    }


    return (
        <Container>

            {/* <CheckoutBag /> */}

            { bag.length > 0 ? 
                <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                    <h1 style={{ textAlign: 'center' }}>Your Order</h1>

                    <Row>
                    {bag.map((itemID) => {
                        const item = items.find(item => item.id === itemID);
                        return (
                            <Col key={item.id} xs={12} md={3}>
                                <Card className="p-2" style={{ height: '32em' }}>
                                    <CardImg
                                        variant='top'
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: '100%', height: '10em' }}
                                    />
                                    <Card.Text>
                                        <b>{item.name}</b>
                                    </Card.Text>
                                    <hr />
                                    <div className="flex-grow-1" style={{ backgroundImage: 'linear-gradient(105deg, darkred, black)', color: 'white', borderRadius: '15%' }}>
                                        <p>${item.price} | {item.cal} Cal</p>
                                        <p>{item.description}</p>
                                    </div>
                                    <hr />
                                    <Button id='createItem' type='submit' onClick={() => removeItem(item.id)} variant='danger'>Remove Item</Button>
                                </Card>
                            </Col>
                        );
                    })}
                    </Row>

                    <Button 
                    variant="primary" 
                    onClick={() => handleCheckout()} 
                    style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }}
                        >Place Order</Button>
                </Card> :
                <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                    <Link className='menuLink menuButton' to="/Menu">Menu</Link>
                </Card>

            }
            


        </Container>
    );
}
