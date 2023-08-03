import React, { useRef, useState } from 'react';
import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Salads() {
    const cardGroupRef = useRef(null);
    const [currentCard, setCurrentCard] = useState(0);

    const cardWidth = 350; // Adjust this value based on your Card width

    const handleScrollLeft = () => {
        const newIndex = currentCard - 1 >= 0 ? currentCard - 1 : 0;
        cardGroupRef.current.scrollLeft = newIndex * cardWidth;
        setCurrentCard(newIndex);
    };

    const handleScrollRight = () => {
        const newIndex = currentCard + 1 <= 4 ? currentCard + 1 : 4;
        cardGroupRef.current.scrollLeft = newIndex * cardWidth;
        setCurrentCard(newIndex);
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
                        overflowX: 'hidden',
                        scrollBehavior: 'smooth', // Enable smooth scrolling
                      }}
                >
                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/8b/8b147d1064ea4111abbf953e50ae2e22.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=ed9b6cd84041dbc3f5d6e5877a6ec349'
                            alt='NEW! Peaches & Cream Milshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>NEW! Peaches & Cream Milshake</b></Card.Text>
                        <hr/>
                        <p>$6.99|Cal 1210</p>
                        <p>Creamy vanilla soft serve blended with milk, diced peaches and peach puree. Topped with</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/42/426f1e2813ea460b90c6bcb0ff5e7433.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9756efce155c480115f27250ff9805c5'
                            alt='Freckled Lemonade Cake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Freckled Lemonade Cake</b></Card.Text>
                        <hr/>
                        <p>$8.99|Cal 1060</p>
                        <p>Light and refreshing lemon cake layered with lemon mousse and white chocolate bits, topped with lemon curd and strawberry</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/f6/f697d1f57d8f41908446cba7b2353242.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=5201c1c0d12df562773768b994584c3e'
                            alt='Mountain Gigh Mudd Pie'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Mountain Gigh Mudd Pie</b></Card.Text>
                        <hr/>
                        <p>$8.99|Cal 1340</p>
                        <p>A mountain of chocolate and vanilla ice cream, layered with OREO® cookies, fudge,</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/2d/2d1a3107546f4656a58d7b0de9a88c62.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=abdce5662c05627cccaa1344163ebde1'
                            alt='Fudge-Filled Chocolate Chip Cookies'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Fudge-Filled Chocolate Chip Cookies</b></Card.Text>
                        <hr/>
                        <p>$1.99|Cal 330</p>
                        <p>One or five of our chocolate chip cookies that feature a soft, fudge-filled center that</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/82/82c0bd0c2fea41a2a9a9e858762de45e.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=101069c04b71061435f2482497abba3e'
                            alt='Cinnamon Sugar Doh! Ring Shorty'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Cinnamon Sugar Doh! Ring Shorty</b></Card.Text>
                        <hr/>
                        <p>$8.69|Cal 770</p>
                        <p>Four cinnamon and sugar croissant donut rings served with caramel and fudge.</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/6a/6a30e9832064456c9b478b5f88b618ec.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4e4f4527209b7a947765c23cad09c97f'
                            alt='Cinnamon Sugar Towering Doh! Rings'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Cinnamon Sugar Towering Doh! Rings</b></Card.Text>
                        <hr/>
                        <p>$10.69|Cal 1550</p>
                        <p>Eight cinnamon and sugar croissant donut rings served with caramel and fudge.</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/fd/fdbfa96cc52b458a84895c39c01c5a43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=1d2111156dfbe0ff5f1b419b0394dac8'
                            alt='Chocolate Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Chocolate Milkshake</b></Card.Text>
                        <hr/>
                        <p>$6.49|Cal 1020</p>
                        <p>Creamy soft-serve blended with milk and chocolate syrup. Garnished with whipped</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/5b/5b92933d55c64481999b3d12d68f70c2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=82994045103910336e80dd57f949c6af'
                            alt='Stawberry Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Stawberry Milkshake</b></Card.Text>
                        <hr/>
                        <p>$6.49|Cal 930</p>
                        <p>Creamy soft-serve blended with milk and strawberry. Garnished with whipped cream</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/70/7053084641cf4f9fa079a6d1dbf81a32.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=0ec514e95988dcca182698d1a9bf42b9'
                            alt='Vanilla Milkshake'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Vanilla Milkshake</b></Card.Text>
                        <hr/>
                        <p>$6.49|Cal 940</p>
                        <p>Creamy soft-serve blended with milk and vanilla syrup. Garnished with whipped cream</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                </div>
                <Button onClick={handleScrollRight}>&#8594;</Button>
            </div>
            <hr></hr>
        </Container>
    );
}
