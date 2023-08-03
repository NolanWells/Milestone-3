import React, { useRef } from 'react';
import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Desserts() {
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
                            src='https://olo-images-live.imgix.net/8b/8b147d1064ea4111abbf953e50ae2e22.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=ed9b6cd84041dbc3f5d6e5877a6ec349'
                            alt='NEW! Peaches & Cream Milshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>NEW! Peaches & Cream Milshake</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/42/426f1e2813ea460b90c6bcb0ff5e7433.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9756efce155c480115f27250ff9805c5'
                            alt='Freckled Lemonade Cake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Freckled Lemonade Cake</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/f6/f697d1f57d8f41908446cba7b2353242.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=5201c1c0d12df562773768b994584c3e'
                            alt='Mountain Gigh Mudd Pie'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Mountain Gigh Mudd Pie</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/2d/2d1a3107546f4656a58d7b0de9a88c62.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=abdce5662c05627cccaa1344163ebde1'
                            alt='Fudge-Filled Chocolate Chip Cookies'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Fudge-Filled Chocolate Chip Cookies</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/82/82c0bd0c2fea41a2a9a9e858762de45e.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=101069c04b71061435f2482497abba3e'
                            alt='Cinnamon Sugar Doh! Ring Shorty'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Cinnamon Sugar Doh! Ring Shorty</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/6a/6a30e9832064456c9b478b5f88b618ec.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4e4f4527209b7a947765c23cad09c97f'
                            alt='Cinnamon Sugar Towering Doh! Rings'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Cinnamon Sugar Towering Doh! Rings</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/fd/fdbfa96cc52b458a84895c39c01c5a43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=1d2111156dfbe0ff5f1b419b0394dac8'
                            alt='Chocolate Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Chocolate Milkshake</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/5b/5b92933d55c64481999b3d12d68f70c2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=82994045103910336e80dd57f949c6af'
                            alt='Stawberry Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Stawberry Milkshake</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/70/7053084641cf4f9fa079a6d1dbf81a32.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=0ec514e95988dcca182698d1a9bf42b9'
                            alt='Vanilla Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Vanilla Milkshake</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                </div>
                <Button onClick={handleScrollRight}>&#8594;</Button>
            </div>
            <hr></hr>
        </Container>
    );
}
