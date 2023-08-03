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
                            src='https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3'
                            alt='House Salad'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>House Salad</b></Card.Text>
                        <hr/>
                        <p>$6.99|Cal 80</p>
                        <p>Diced tomato, sliced cucumber, shredded Cheddar cheese and croutons on mixed</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/9e/9efeee6016444d9c97251455b0c3b616.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4337783f273b19b29c317c01cfbfd994'
                            alt='House Salad'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Avo-Cobb-O Salad</b></Card.Text>
                        <hr/>
                        <p>$14.49|Cal 570</p>
                        <p>Grilled chicken breast, hardwood-smoked bacon, fresh avocado, bleu cheese crumbles, hard-boiled eggs, tomato and croutons</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/0b/0b5f34af166e48088f1376f1195c7b92.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4322e13975b523500ad3b2a260e05997'
                            alt='House Salad'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Crispy Chicken Tender Salad</b></Card.Text>
                        <hr/>
                        <p>$14.49|Cal 840</p>
                        <p>Chicken tenders, hard-boiled eggs, hardwood-smoked bacon, tomato, croutons</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/ea/ea83c5817fee41c7be291c6a5dddca56.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=6f5b7dc47f2225474544292361a0a960'
                            alt='House Salad'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Simply Grilled Chicken Salad</b></Card.Text>
                        <hr/>
                        <p>$13.79|Cal 310</p>
                        <p>This combo of grilled chicken breast, cheddar, tomato, croutons and cucumbers is oh, so simply satisfying. Served on mixed</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>

                    <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                        <CardImg
                            variant='top'
                            src='https://olo-images-live.imgix.net/5b/5bffbe920a114245be9587a94407d641.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f0a6209bcf27e2e9cf4770d283853a57'
                            alt='House Salad'
                            style={{ width: "100%", height: "10em" }} // Adjust height as needed
                        />
                        <Card.Text><b>Southwest Salad</b></Card.Text>
                        <hr/>
                        <p>$14.79|Cal 790</p>
                        <p>Ancho-grilled chicken breast, black beans, avocado, fried jalapeño coins, tomato, corn,</p>
                        <Button type='submit'>Add To Bag</Button>
                    </Card>
                </div>
                <Button onClick={handleScrollRight}>&#8594;</Button>
            </div>
            <hr></hr>
        </Container>
    );
}