import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';

// Sample data for sides (you can replace this with your actual data)
const sidesData = [
    {
        id: 1,
        name: 'Get Saucy!',
        image: 'https://olo-images-live.imgix.net/d4/d4ae8edade03414c8c2088e8baddee28.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=fb2c38e381de3488d3240a4f847eed19',
        price: '.99',
        cal: '50',
        description: 'Our sauce secret is out! Creamy Ranch Dressing and coveted Campfire Mayo are',
    },
    {
        id: 2,
        name: 'Steak Fries',
        image: 'https://olo-images-live.imgix.net/21/21e0edf56c1544f287a0cddf82e1f420.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c8e04afb6a1298977c3fa5c8fe44de35',
        price: '1.99',
        cal: '350',
        description: "Thick cut and fried to perfection with Red's Original seasoning.",
    },
    {
        id: 3,
        name: 'Sweet Potato Fries',
        image: 'https://olo-images-live.imgix.net/4b/4bbab81a004648ba8ef0fed7f8e48cbf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c21376e0322521db1855c0830dadf595',
        price: '1.99',
        cal: '460',
        description: 'Thin cut sweet potatoes fried to perfection with a dash of salt.',
    },
    {
        id: 4,
        name: 'Garlic Fries',
        image: 'https://olo-images-live.imgix.net/cf/cf8ce00e14e94a35894885bfc23bd0e2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=491574624bb92c1e5789dca3d3cd7659',
        price: '1.99',
        cal: '430',
        description: 'Thick cut and fried to perfection with garlic Parmesan butter and Parmesan cheese.',
    },
    {
        id: 5,
        name: 'Yukon Chips',
        image: 'https://olo-images-live.imgix.net/2e/2ed64b67412f438c9c603b8885c4e86c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=7fc953627c7bbda90766575d056a6e2c',
        price: '1.99',
        cal: '500',
        description: 'Perfectly seasoned with Red Robin® Seasoning.',
    },
    {
        id: 6,
        name: 'Steamed Broccoli',
        image: 'https://olo-images-live.imgix.net/c0/c0dc67397d094a8991cea5991a594267.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c38b60c048fa7c55df6c24c5e36794a6',
        price: '1.99',
        cal: '30',
        description: 'Fresh broccoli, steamed to perfection.',
    }
];

export default function Sides() {
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
                            <Button type='submit' variant='danger'>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
