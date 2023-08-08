import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';

// Sample data for desserts (you can replace this with your actual data)
const dessertsData = [
    {
        id: 28,
        name: 'NEW! Peaches & Cream Milshake',
        image: 'https://olo-images-live.imgix.net/8b/8b147d1064ea4111abbf953e50ae2e22.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=ed9b6cd84041dbc3f5d6e5877a6ec349',
        price: '6.99',
        cal: '1210',
        description: 'Creamy vanilla soft serve blended with milk, diced peaches and peach puree. Topped with',
    },
    {
        id: 29,
        name: 'Freckled Lemonade Cake',
        image: 'https://olo-images-live.imgix.net/42/426f1e2813ea460b90c6bcb0ff5e7433.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9756efce155c480115f27250ff9805c5',
        price: '8.99',
        cal: '1060',
        description: 'Light and refreshing lemon cake layered with lemon mousse and white chocolate bits, topped with lemon curd and strawberry',
    },
    {
        id: 30,
        name: 'Mountain Gigh Mudd Pie',
        image: 'https://olo-images-live.imgix.net/f6/f697d1f57d8f41908446cba7b2353242.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=5201c1c0d12df562773768b994584c3e',
        price: '8.99',
        cal: '1340',
        description: 'A mountain of chocolate and vanilla ice cream, layered with OREO® cookies, fudge,',
    },
    {
        id: 31,
        name: 'Fudge-Filled Chocolate Chip Cookies',
        image: 'https://olo-images-live.imgix.net/2d/2d1a3107546f4656a58d7b0de9a88c62.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=abdce5662c05627cccaa1344163ebde1',
        price: '1.99',
        cal: '330',
        description: 'One or five of our chocolate chip cookies that feature a soft, fudge-filled center that',
    },
    {
        id: 32,
        name: 'Cinnamon Sugar Doh! Ring Shorty',
        image: 'https://olo-images-live.imgix.net/82/82c0bd0c2fea41a2a9a9e858762de45e.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=101069c04b71061435f2482497abba3e',
        price: '8.69',
        cal: '770',
        description: 'Four cinnamon and sugar croissant donut rings served with caramel and fudge.',
    },
    {
        id: 33,
        name: 'Cinnamon Sugar Towering Doh! Rings',
        image: 'https://olo-images-live.imgix.net/6a/6a30e9832064456c9b478b5f88b618ec.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4e4f4527209b7a947765c23cad09c97f',
        price: '10.69',
        cal: '1550',
        description: 'Eight cinnamon and sugar croissant donut rings served with caramel and fudge.',
    },
    {
        id: 34,
        name: 'Chocolate Milkshake',
        image: 'https://olo-images-live.imgix.net/fd/fdbfa96cc52b458a84895c39c01c5a43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=1d2111156dfbe0ff5f1b419b0394dac8',
        price: '6.49',
        cal: '1020',
        description: 'Creamy soft-serve blended with milk and chocolate syrup. Garnished with whipped',
    },
    {
        id: 35,
        name: 'Stawberry Milkshake',
        image: 'https://olo-images-live.imgix.net/5b/5b92933d55c64481999b3d12d68f70c2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=82994045103910336e80dd57f949c6af',
        price: '6.49',
        cal: '930',
        description: 'Creamy soft-serve blended with milk and strawberry. Garnished with whipped cream',
    },
    {
        id: 36,
        name: 'Vanilla Milkshake',
        image: 'https://olo-images-live.imgix.net/70/7053084641cf4f9fa079a6d1dbf81a32.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=0ec514e95988dcca182698d1a9bf42b9',
        price: '6.49',
        cal: '940',
        description: 'Creamy soft-serve blended with milk and vanilla syrup. Garnished with whipped cream',
    }
];

export default function Desserts() {
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
                            <Button type='submit' variant='danger'>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
