import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';
import saladsData from './food/saladsData';

// Sample data for salads (you can replace this with your actual data)


export default function Salads({setBag, bag}) {

    

    const addItem = (item) => {
        const updatedBag = [...bag, item];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));
      };
    

    return (
        <Container>
            <Row>
                {saladsData.map((salad) => (
                    <Col key={salad.id} xs={12} md={3}>
                        <Card className="p-2" style={{ height: '32em' }}> {/* Set the desired height for the cards */}
                            <CardImg
                                variant='top'
                                src={salad.image}
                                alt={salad.name}
                                style={{ width: '100%', height: '10em', objectFit: 'cover' }} // Adjust height as needed
                            />
                            <Card.Text>
                                <b>{salad.name}</b>
                            </Card.Text>
                            <hr />
                            <div className="flex-grow-1" style={{ backgroundImage: 'linear-gradient(105deg, darkred, black)', color: 'white', borderRadius: '15%' }}> {/* This div will make the button take the remaining vertical space */}
                                <p>${salad.price} | {salad.cal} Cal</p>
                                <p>{salad.description}</p>
                            </div>
                            <hr />
                            <Button type='submit' variant='danger' onClick = {() => addItem(salad.id)} >Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
