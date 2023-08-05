import React from 'react';
import { Container, Card, Button, CardImg, Row, Col } from 'react-bootstrap';

// Sample data for burgers (you can replace this with your actual data)
const burgersData = [
    {
        id: 1,
        name: 'Cheesy Bacon Fondue',
        image: 'https://olo-images-live.imgix.net/e5/e5be276f90af4466bfdf56572801b903.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=23bf6755f6be7dd30ca79e6453806f10',
        price: '16.29',
        cal: '1350',
        description: 'Hardwood-smoked bacon, American cheese and mayo. Served with Cheesy Bacon Fondue for dipping.',
    },
    {
        id: 2,
        name: 'The Southern Charm',
        image: 'https://olo-images-live.imgix.net/e8/e8d3b547b3764a8e87402df95fcd9c54.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=113b2bb7f880270fd2d487ddfe2e28f0',
        price: '14.49',
        cal: '570',
        description: 'Crush on this: hardwood-smoked bacon, Whiskey River® BBQ Sauce, cheddar,',
    },
    {
        id: 3,
        name: 'Whiskey River BBQ',
        image: 'https://olo-images-live.imgix.net/54/54f1e05f7e054e0f8a9a6d482e4cd93c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=acc8353ca250777208f7843240905dc8',
        price: '14.49',
        cal: '1190',
        description: 'Our signature Whiskey River® BBQ Sauce, crispy onion straws, cheddar, lettuce, tomato and mayo.',
    },
    {
        id: 4,
        name: 'Smoke & Pepper',
        image: 'https://olo-images-live.imgix.net/49/496fbe1439c449a28e3e89e4d79b729e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=74f164891ed69909e2bd5ee4314487db',
        price: '16.19',
        cal: '820',
        description: 'This combo of black-peppered bacon, cheddar, lettuce, dill pickles and Smoke &',
    },
    {
        id: 5,
        name: 'Royal Red Robin',
        image: 'https://olo-images-live.imgix.net/4a/4a3b8559861f4315afff47cc6bec4cbd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=b4f234d03d97bc21768cbdbc77c307a0',
        price: '15.39',
        cal: '1140',
        description: "It's a classic! Over-easy egg*, hardwood-smoked bacon, American cheese, lettuce,",
    },
    {
        id: 6,
        name: "Burnin' Love Burger",
        image: 'https://olo-images-live.imgix.net/fe/fe57fa5c8758417f8df87eb73ad6a246.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=95f3cb721a450afd73baa3af03f22b17',
        price: '15.49',
        cal: '770',
        description: 'Fried jalapeño coins, house-made salsa, pepper-jack, lettuce, tomato and chipotle aioli.',
    },
    {
        id: 7,
        name: 'Bleu Ribbon',
        image: 'https://olo-images-live.imgix.net/a0/a0326260202d42a5bf69978982ca735b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=135709d17e16e8dafeff30debff07ee3',
        price: '15.29',
        cal: '1060',
        description: 'Steak sauce, bleu cheese crumbles, crispy onion straws and chipotle aioli for a steakhouse experience. Knives optional.',
    },
    {
        id: 8,
        name: 'Scorpion',
        image: 'https://olo-images-live.imgix.net/ee/ee7936a668dc44409586569a9dd28560.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=88a9dbceb09029e4367445ddc2e1578d',
        price: '16.19',
        cal: '1010',
        description: 'Topped with pepper-jack, crispy jalapeños, Scorpion Pepper Sauce, pickles, onion and',
    },
    {
        id: 9,
        name: 'Banzai',
        image: 'https://olo-images-live.imgix.net/43/4356f0a75c6f4009bcc9f83834d6f1b1.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=17507451811d9b59e6d543a956808994',
        price: '14.49',
        cal: '1000',
        description: 'Take a trip to the tropics. Teriyaki-glazed patty topped with sweet grilled pineapple,',
    },
    {
        id: 10,
        name: 'Bacon Cheeseburger',
        image: 'https://olo-images-live.imgix.net/1d/1d1ab0d9df6c4512be9fcbd781e4d594.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=8f3cbbf4635c1c7bbfff4b275bc78ed7',
        price: '14.99',
        cal: '950',
        description: 'Hardwood-smoked bacon, lettuce, tomato, mayo and your choice of cheese.',
    },
    {
        id: 11,
        name: 'Guacamole Bacon',
        image: 'https://olo-images-live.imgix.net/47/47f69869792a4c70bbceae686c229ec8.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9aee124a2584980238eb8721680a0408',
        price: '15.59',
        cal: '950',
        description: 'House-made guac, hardwood-smoked bacon, Swiss and onion topped with lettuce, tomato and mayo.',
    },
    {
        id: 12,
        name: 'Red Robin Gourmet Cheeseburger',
        image: 'https://olo-images-live.imgix.net/ab/ab00c226b523413fada55a3cefacc2cd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c897fa3615227a872720ae0a2a069498',
        price: '14.49',
        cal: '570',
        description: 'Pickle relish, onion, pickles, lettuce, tomato, mayo and your choice of cheese.',
    },
    {
        id: 13,
        name: "Sauteed 'Shroom",
        image: 'https://olo-images-live.imgix.net/f4/f493bb3637474e949b7e7d4f13d11fdb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9ff2358a840a57a19177622c5d084dac',
        price: '14.59',
        cal: '900',
        description: 'A mound of fresh, sautéed garlic mushrooms, covered with melty Swiss.',
    },
    {
        id: 14,
        name: 'Monster',
        image: 'https://olo-images-live.imgix.net/47/4725add28eee43f3bda812e6f17ac364.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9f0d07c2bce80c98ca30f6c06e28f5ae',
        price: '16.99',
        cal: '1140',
        description: "What's better than one juicy patty? Two! Grilled with your choice of cheese, onion,",
    },
    {
        id: 15,
        name: 'Keep it Simple',
        image: 'https://olo-images-live.imgix.net/71/717c1a3d69ff4d489437e711331b3108.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=d2ec1101d71ff1da1ab890cf5ec7ec39',
        price: '13.59',
        cal: '380',
        description: 'Keep it simple (simply delicious, that is) with a naked beef, chicken or ancient-grain veggie patty served with onion, lettuce and tomato.',
    }
];

export default function Burgers() {
    return (
        <Container>
            <Row>
                {burgersData.map((burger) => (
                    <Col key={burger.id} xs={12} md={3}>
                        <Card className="p-2">
                            <CardImg
                                variant='top'
                                src={burger.image}
                                alt={burger.name}
                                style={{ width: '100%', height: '10em' }} // Adjust height as needed
                            />
                            <Card.Text>
                                <b>{burger.name}</b>
                            </Card.Text>
                            <hr />
                            <p>${burger.price} | {burger.cal} Cal</p>
                            <p>{burger.description}</p>
                            <Button type='submit'>Add To Bag</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr />
        </Container>
    );
}
