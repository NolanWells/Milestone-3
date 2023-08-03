import React, { useRef } from 'react';
import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Burgers() {
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
                            src='https://olo-images-live.imgix.net/e5/e5be276f90af4466bfdf56572801b903.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=23bf6755f6be7dd30ca79e6453806f10'
                            alt='Cheesy Bacon Fondue'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Cheesy Bacon Fondue</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/e8/e8d3b547b3764a8e87402df95fcd9c54.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=113b2bb7f880270fd2d487ddfe2e28f0'
                            alt='The Southern Charm'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>The Southern Charm</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/54/54f1e05f7e054e0f8a9a6d482e4cd93c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=acc8353ca250777208f7843240905dc8'
                            alt='Whiskey River BBQ'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Whiskey River BBQ</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/49/496fbe1439c449a28e3e89e4d79b729e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=74f164891ed69909e2bd5ee4314487db'
                            alt='Smoke & Pepper'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Smoke & Pepper</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/4a/4a3b8559861f4315afff47cc6bec4cbd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=b4f234d03d97bc21768cbdbc77c307a0'
                            alt='Royal Red Robin'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Royal Red Robin</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>
                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/fe/fe57fa5c8758417f8df87eb73ad6a246.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=95f3cb721a450afd73baa3af03f22b17'
                            alt="Burnin' Love Burger"
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Burnin' Love Burger</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/a0/a0326260202d42a5bf69978982ca735b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=135709d17e16e8dafeff30debff07ee3'
                            alt='Bleu Ribbon'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Bleu Ribbon</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/ee/ee7936a668dc44409586569a9dd28560.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=88a9dbceb09029e4367445ddc2e1578d'
                            alt='Scorpion'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Scorpion</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/43/4356f0a75c6f4009bcc9f83834d6f1b1.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=17507451811d9b59e6d543a956808994'
                            alt='Banzai'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Banzai</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/1d/1d1ab0d9df6c4512be9fcbd781e4d594.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=8f3cbbf4635c1c7bbfff4b275bc78ed7'
                            alt='Bacon Cheeseburger'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Bacon Cheeseburger</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>
                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/47/47f69869792a4c70bbceae686c229ec8.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9aee124a2584980238eb8721680a0408'
                            alt='Guacamole Bacon'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Guacamole Bacon</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/ab/ab00c226b523413fada55a3cefacc2cd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c897fa3615227a872720ae0a2a069498'
                            alt='Red Robin Gourmet Cheeseburger'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Red Robin Gourmet Cheeseburger</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/f4/f493bb3637474e949b7e7d4f13d11fdb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9ff2358a840a57a19177622c5d084dac'
                            alt="Sauteed 'Shroom"
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Sauteed 'Shroom</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/47/4725add28eee43f3bda812e6f17ac364.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9f0d07c2bce80c98ca30f6c06e28f5ae'
                            alt='Monster'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Monster</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/71/717c1a3d69ff4d489437e711331b3108.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=d2ec1101d71ff1da1ab890cf5ec7ec39'
                            alt='Keep it Simple'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text>Keep it Simple</Card.Text>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>
                </div>
                <Button onClick={handleScrollRight}>&#8594;</Button>
            </div>
            <hr></hr>
        </Container>
    );
}