import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Burgers() {

    return (
        <Container>
            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/e5/e5be276f90af4466bfdf56572801b903.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=23bf6755f6be7dd30ca79e6453806f10'
                    alt='Cheesy Bacon Fondue'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Cheesy Bacon Fondue</b></Card.Text>
                <hr />
                <p>$16.29|Cal 1350</p>
                <p>Hardwood-smoked bacon, American cheese and mayo. Served with Cheesy Bacon Fondue for dipping.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/e8/e8d3b547b3764a8e87402df95fcd9c54.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=113b2bb7f880270fd2d487ddfe2e28f0'
                    alt='The Southern Charm'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>The Southern Charm</b></Card.Text>
                <hr />
                <p>$15.99|Cal 1190</p>
                <p>Crush on this: hardwood-smoked bacon, Whiskey River® BBQ Sauce, cheddar,</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/54/54f1e05f7e054e0f8a9a6d482e4cd93c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=acc8353ca250777208f7843240905dc8'
                    alt='Whiskey River BBQ'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Whiskey River BBQ</b></Card.Text>
                <hr />
                <p>$14.49|Cal 1190</p>
                <p>Our signature Whiskey River® BBQ Sauce, crispy onion straws, cheddar, lettuce, tomato and mayo.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/49/496fbe1439c449a28e3e89e4d79b729e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=74f164891ed69909e2bd5ee4314487db'
                    alt='Smoke & Pepper'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Smoke & Pepper</b></Card.Text>
                <hr />
                <p>$16.19|Cal 820</p>
                <p>This combo of black-peppered bacon, cheddar, lettuce, dill pickles and Smoke &</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/4a/4a3b8559861f4315afff47cc6bec4cbd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=b4f234d03d97bc21768cbdbc77c307a0'
                    alt='Royal Red Robin'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Royal Red Robin</b></Card.Text>
                <hr />
                <p>$15.39|Cal 1140</p>
                <p>It's a classic! Over-easy egg*, hardwood-smoked bacon, American cheese, lettuce,</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>
            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/fe/fe57fa5c8758417f8df87eb73ad6a246.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=95f3cb721a450afd73baa3af03f22b17'
                    alt="Burnin' Love Burger"
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Burnin' Love Burger</b></Card.Text>
                <hr />
                <p>$15.49|Cal 770</p>
                <p>Fried jalapeño coins, house-made salsa, pepper-jack, lettuce, tomato and chipotle aioli.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/a0/a0326260202d42a5bf69978982ca735b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=135709d17e16e8dafeff30debff07ee3'
                    alt='Bleu Ribbon'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Bleu Ribbon</b></Card.Text>
                <hr />
                <p>$15.29|Cal 1060</p>
                <p>Steak sauce, bleu cheese crumbles, crispy onion straws and chipotle aioli for a steakhouse experience. Knives optional.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/ee/ee7936a668dc44409586569a9dd28560.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=88a9dbceb09029e4367445ddc2e1578d'
                    alt='Scorpion'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Scorpion</b></Card.Text>
                <hr />
                <p>$16.19|Cal 1010</p>
                <p>Topped with pepper-jack, crispy jalapeños, Scorpion Pepper Sauce, pickles, onion and</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/43/4356f0a75c6f4009bcc9f83834d6f1b1.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=17507451811d9b59e6d543a956808994'
                    alt='Banzai'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Banzai</b></Card.Text>
                <hr />
                <p>$14.49|Cal 1000</p>
                <p>Take a trip to the tropics. Teriyaki-glazed patty topped with sweet grilled pineapple,</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/1d/1d1ab0d9df6c4512be9fcbd781e4d594.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=8f3cbbf4635c1c7bbfff4b275bc78ed7'
                    alt='Bacon Cheeseburger'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Bacon Cheeseburger</b></Card.Text>
                <hr />
                <p>$14.99|Cal 950</p>
                <p>Hardwood-smoked bacon, lettuce, tomato, mayo and your choice of cheese.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>
            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/47/47f69869792a4c70bbceae686c229ec8.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9aee124a2584980238eb8721680a0408'
                    alt='Guacamole Bacon'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Guacamole Bacon</b></Card.Text>
                <hr />
                <p>$15.59|Cal 950</p>
                <p>House-made guac, hardwood-smoked bacon, Swiss and onion topped with lettuce, tomato and mayo.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/ab/ab00c226b523413fada55a3cefacc2cd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c897fa3615227a872720ae0a2a069498'
                    alt='Red Robin Gourmet Cheeseburger'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Red Robin Gourmet Cheeseburger</b></Card.Text>
                <hr />
                <p>$14.19|Cal 800</p>
                <p>Pickle relish, onion, pickles, lettuce, tomato, mayo and your choice of cheese.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/f4/f493bb3637474e949b7e7d4f13d11fdb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9ff2358a840a57a19177622c5d084dac'
                    alt="Sauteed 'Shroom"
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Sauteed 'Shroom</b></Card.Text>
                <hr />
                <p>$14.59|Cal 900</p>
                <p>A mound of fresh, sautéed garlic mushrooms, covered with melty Swiss.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/47/4725add28eee43f3bda812e6f17ac364.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9f0d07c2bce80c98ca30f6c06e28f5ae'
                    alt='Monster'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Monster</b></Card.Text>
                <hr />
                <p>$16.99|Cal 1140</p>
                <p>What's better than one juicy patty? Two! Grilled with your choice of cheese, onion,</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/71/717c1a3d69ff4d489437e711331b3108.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=d2ec1101d71ff1da1ab890cf5ec7ec39'
                    alt='Keep it Simple'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Keep it Simple</b></Card.Text>
                <hr />
                <p>$13.59|Cal 380</p>
                <p>Keep it simple (simply delicious, that is) with a naked beef, chicken or ancient-grain veggie patty served with onion, lettuce and tomato.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>
            <hr></hr>
        </Container>
    );
}