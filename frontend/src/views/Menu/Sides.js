import React, { useRef } from 'react';
import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Sides() {
    const cardGroupRef = useRef(null);

    const cardWidth = 350; // Adjust this value based on your Card width

    const handleScrollLeft = () => {
        cardGroupRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    const handleScrollRight = () => {
        cardGroupRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', overflowX: 'hidden' }}>
                <Button onClick={handleScrollLeft}>&#8592;</Button>
                <div
                    ref={cardGroupRef}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: `${cardWidth}px`, // Show only one card at a time
                    }}
                >
                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/d4/d4ae8edade03414c8c2088e8baddee28.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=fb2c38e381de3488d3240a4f847eed19'
                            alt='Get Saucy!'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Get Saucy!</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/21/21e0edf56c1544f287a0cddf82e1f420.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c8e04afb6a1298977c3fa5c8fe44de35'
                            alt='Steak Fries'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Steak Fries</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/4b/4bbab81a004648ba8ef0fed7f8e48cbf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c21376e0322521db1855c0830dadf595'
                            alt='Sweet Potato Fries'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Sweet Potato Fries</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/cf/cf8ce00e14e94a35894885bfc23bd0e2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=491574624bb92c1e5789dca3d3cd7659'
                            alt='Garlic Fries'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Garlic Fries</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/2e/2ed64b67412f438c9c603b8885c4e86c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=7fc953627c7bbda90766575d056a6e2c'
                            alt='Yukon Chips'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Yukon Chips</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/c0/c0dc67397d094a8991cea5991a594267.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c38b60c048fa7c55df6c24c5e36794a6'
                            alt='Steamed Broccoli'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Steamed Broccoli</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                </div>
                <Button onClick={handleScrollRight}>&#8594;</Button>
            </div>
            <hr></hr>
        </Container>
    );
}