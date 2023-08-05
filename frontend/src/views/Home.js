import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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
            <footer>
                <div>
                    <img src='https://www.redrobin.com/assets/images/RR_Logo.svg'
                        style={{ width: '125px', height: '125px', position: 'absolute', top: '90%', left: '47%' }}
                    />
                    <h7
                    style={{position: 'absolute', top: '100%', left: '45%' }}
                    >Copyright 2023 Red Robin, Inc.</h7>
                    <a  href='https://www.facebook.com/RedRobinBurgers/' style={{position: 'absolute', top: '103%', left: '42%' }}>Facebook</a>
                    <a  href='https://twitter.com/redrobinburgers/' style={{position: 'absolute', top: '103%', left: '47%' }}>Twitter</a>
                    <a  href='https://www.youtube.com/RedRobinBurgers' style={{position: 'absolute', top: '103%', left: '51%' }}>YouTube</a>
                    <a href='https://www.instagram.com/redrobinburgers/' style={{position: 'absolute', top: '103%', left: '56%' }}>Instgram</a>

                </div>
            </footer>
        </div>
    )

}

