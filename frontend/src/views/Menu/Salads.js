import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';

// Sample data for salads (you can replace this with your actual data)
const saladsData = [
    {
        id: 1,
        name: 'House Salad',
        image: 'https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3',
        price: '6.99',
        cal: '80',
        description: 'Diced tomato, sliced cucumber, shredded Cheddar cheese and croutons on mixed',
    },
    {
        id: 2,
        name: 'Avo-Cobb-O Salad',
        image: 'https://olo-images-live.imgix.net/9e/9efeee6016444d9c97251455b0c3b616.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4337783f273b19b29c317c01cfbfd994',
        price: '14.49',
        cal: '570',
        description: 'Diced tomato, sliced cucumber, shredded Cheddar cheese and croutons on mixed',
    },
    {
        id: 3,
        name: 'House Salad',
        image: 'https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3',
        price: '14.49',
        cal: '840',
        description: 'Chicken tenders, hard-boiled eggs, hardwood-smoked bacon, tomato, croutons',
    },
    {
        id: 4,
        name: 'Simply Grilled Chicken Salad',
        image: 'https://olo-images-live.imgix.net/0b/0b5f34af166e48088f1376f1195c7b92.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4322e13975b523500ad3b2a260e05997',
        price: '13.79',
        cal: '310',
        description: 'This combo of grilled chicken breast, cheddar, tomato, croutons and cucumbers is oh, so simply satisfying. Served on mixed',
    },
    {
        id: 5,
        name: 'Southwest Salad',
        image: 'https://olo-images-live.imgix.net/5b/5bffbe920a114245be9587a94407d641.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f0a6209bcf27e2e9cf4770d283853a57',
        price: '14.79',
        cal: '790',
        description: 'Ancho-grilled chicken breast, black beans, avocado, fried jalapeño coins, tomato, corn,',
    }
];

export default function Salads() {
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
                            <Button type='submit' variant='danger'>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
