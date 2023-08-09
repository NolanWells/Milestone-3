import React, { useState } from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';
import dessertsData from './food/desertData';

// Sample data for desserts (you can replace this with your actual data)


export default function Desserts({setBag, bag}) {



    const addItem = (item) => {
        const updatedBag = [...bag, item];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
      };

    return (
        <Container>
            <Row>
                {dessertsData.map((dessert) => (
                    <Col key={dessert.id} xs={12} md={3}>
                        <Card className="p-2" style={{ height: '32em' }}> {/* Set the desired height for the cards */}
                            <CardImg
                                variant='top'
                                src={dessert.image}
                                alt={dessert.name}
                                style={{ width: '100%', height: '15em' }} // Adjust height as needed
                            />
                            <Card.Text>
                                <b>{dessert.name}</b>
                            </Card.Text>
                            <hr />
                            <div className="flex-grow-1" style={{ backgroundImage: 'linear-gradient(105deg, darkred, black)', color: 'white', borderRadius: '15%' }}> {/* This div will make the button take the remaining vertical space */}
                            <p>${dessert.price} | {dessert.cal} Cal</p>
                            <p>{dessert.description}</p>
                            </div>
                            <hr />
                            <Button type='submit' variant='danger' onClick = {() => addItem(dessert.id)} >Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
