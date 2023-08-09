import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';

import burgersData from './food/burgersData';

// Sample data for burgers (you can replace this with your actual data)




export default function Burgers({setBag, bag}) {



    const addItem = (item) => {
        const updatedBag = [...bag, item];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
      };
    

    return (
        <Container>
            <Row>
                {burgersData.map((burger) => (
                    <Col key={burger.id} xs={12} md={3}>
                        <Card className="p-2" style={{ height: '32em' }}> {/* Set the desired height for the cards */}
                            <CardImg
                                variant='top'
                                src={burger.image}
                                alt={burger.name}
                                style={{ width: '100%', height: '10em' }} // Adjust height as needed
                            />
                            <Card.Text>
                                <b>{burger.name}</b>
                            </Card.Text>
                            <hr />
                            <div className="flex-grow-1" style={{ backgroundImage: 'linear-gradient(105deg, darkred, black)', color: 'white', borderRadius: '15%' }}> {/* This div will make the button take the remaining vertical space */}
                                <p>${burger.price} | {burger.cal} Cal</p>
                                <p>{burger.description}</p>
                            </div>
                            <hr />
                            <Button id='createItem' type='submit' onClick = {() => addItem(burger.id)} variant='danger'>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
