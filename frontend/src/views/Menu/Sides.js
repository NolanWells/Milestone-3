import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';
import sidesData from './food/sidesData';
// Sample data for sides (you can replace this with your actual data)

export default function Sides({setBag, bag}) {



    const addItem = (item) => {
        const updatedBag = [...bag, item];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
      };
    

    return (
        <Container>
            <Row>
                {sidesData.map((sides) => (
                    <Col key={sides.id} xs={12} md={3}>
                        <Card className="p-2" style={{ height: '32em' }}> {/* Set the desired height for the cards */}
                            <CardImg
                                variant='top'
                                src={sides.image}
                                alt={sides.name}
                                style={{ width: '100%', height: '15em' }} // Adjust height as needed
                            />
                            <Card.Text>
                                <b>{sides.name}</b>
                            </Card.Text>
                            <hr />
                            <div className="flex-grow-1" style={{ backgroundImage: 'linear-gradient(105deg, darkred, black)', color: 'white', borderRadius: '15%' }}> {/* This div will make the button take the remaining vertical space */}
                                <p>${sides.price} | {sides.cal} Cal</p>
                                <p>{sides.description}</p>
                            </div>
                            <hr />
                            <Button type='submit' variant='danger' onClick = {() => addItem(sides.id)}>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
