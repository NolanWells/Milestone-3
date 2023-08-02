import { Carousel } from "react-bootstrap"
import ExampleCarouselImage from '.../Picture/Burger1.jpg'



export default function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3>Burger Picture</h3>
                    <p>something that makes my mouth water</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Burger Picture</h3>
                    <p>something that makes my mouth water</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Burger Picture</h3>
                    <p>something that makes my mouth water</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}