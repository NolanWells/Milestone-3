import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function Home() {
    return (
        <div style={{ display: 'block', width: 1000, padding: 30, margin: 'auto' }}>
            <Carousel>
                <Carousel.Item interval={15000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Burger"

                    />
                    <Carousel.Caption>
                        <h3>A Burger That Makes You Mouth Water!</h3>
                        <form
                            action='/Order' class='inline'
                        >
                            <button variant="light">Order Now</button>
                        </form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={15000}>
                    <img
                        className="d-block"
                        src="https://www.nrn.com/sites/nrn.com/files/red-robin-restaurant-industry-veteran-paul-murphy-ceo_1.gif"
                        alt="Rewards"
                        width='1000 px'
                        height='626 pxS'
                    />
                    <Carousel.Caption>
                        <h3>Login!</h3>
                        <p>Login in to Earn Rewards or Order to You!</p>
                        <form
                            action='/Login' class='inline'
                        >
                            <button variant="light">Login</button>
                        </form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={15000}>
                    <img
                        className="d-block w-100"
                        src="https://www.federalwaymirror.com/wp-content/uploads/2021/09/26515344_web1_T-burger.jpg"
                        alt="Menu"
                    />
                    <Carousel.Caption>
                        <h3>Look at Our Delicious Menu</h3>
                        <form
                            action='/Menu' class='inline'
                        >
                            <button variant="light">Go to Menu</button>
                        </form>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image position='abosulte' width='100%' height='50%' src='https://www.redrobin.com/sites/default/files/styles/full_width_md/public/2023-06/flat-top-grill-patty-with-cheese.jpg.webp?itok=pJf3tzlO/' roundedCircle />
                        <br/>
                        <div>
                            <h3>NEW GRILLS FOR US. JUICIER BURGERS FOR YOU.</h3>
                            <p>The driving force behind the juicy. Our new cooking and searing method traps in seasoning and coaxes out flavor you absolutely can’t make at home.</p>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image position='abosulte' margin='auto' width='100%' height='50%' src='https://www.redrobin.com/sites/default/files/styles/full_width_md/public/2023-06/brioche-buns.jpg.webp?itok=r-O0MzHS' roundedCircle />
                        <br/>
                        <div>
                            <h3>THE ONLY CONTAINER FOR UNCONTAINABLE FLAVOR.</h3>
                            <p>An unsung hero on the journey to a better burger is our new brioche bun — buttery, toasty goodness, providing a bed of richness and flavor for our bigger, juicier patties.</p>
                        </div>
                    </Col>

                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image position='abosulte' margin='auto' width='100%' height='50%' src='https://www.redrobin.com/sites/default/files/styles/full_width_md/public/2023-06/plates.jpg.webp?itok=S8br2ndF' roundedCircle />
                        <br/>
                        <div>
                            <h3>THEY DESERVE THRONES. BUT THOSE ARE HARD TO WASH.</h3>
                            <p>Take your first bite and you know. Bigger, juicier, hand-crafted gourmet burgers with never-before-seen flavors -- a basket just won't do.</p>
                        </div>
                    </Col>

                </Row>
            </Container>
            <footer>
                <div>
                    <img src='https://www.redrobin.com/assets/images/RR_Logo.svg'
                        style={{ width: '125px', height: '125px', position: 'absolute', top: '180%', left: '47%' }}
                    />
                    <h7
                        style={{ position: 'absolute', top: '190%', left: '47%' }}
                    >Copyright 2023 Red Robin, Inc.</h7>
                    <a href='https://www.facebook.com/RedRobinBurgers/' style={{ position: 'absolute', top: '210%', left: '42%' }}>Facebook</a>
                    <a href='https://twitter.com/redrobinburgers/' style={{ position: 'absolute', top: '210%', left: '47%' }}>Twitter</a>
                    <a href='https://www.youtube.com/RedRobinBurgers' style={{ position: 'absolute', top: '210%', left: '51%' }}>YouTube</a>
                    <a href='https://www.instagram.com/redrobinburgers/' style={{ position: 'absolute', top: '210%', left: '56%' }}>Instgram</a>

                </div>
            </footer>
        </div>
    )

}