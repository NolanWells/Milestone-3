import { Card, CardImg, Container, Button } from 'react-bootstrap';

export default function Salads() {

    return (
        <Container>
            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/d4/d4ae8edade03414c8c2088e8baddee28.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=fb2c38e381de3488d3240a4f847eed19'
                    alt='Get Saucy!'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Get Saucy!</b></Card.Text>
                <hr />
                <p>$1.99|Cal 50</p>
                <p>Our sauce secret is out! Creamy Ranch Dressing and coveted Campfire Mayo are</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/21/21e0edf56c1544f287a0cddf82e1f420.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c8e04afb6a1298977c3fa5c8fe44de35'
                    alt='Steak Fries'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Steak Fries</b></Card.Text>
                <hr />
                <p>$1.99|Cal 350</p>
                <p>Thick cut and fried to perfection with Red's Original seasoning.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/4b/4bbab81a004648ba8ef0fed7f8e48cbf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c21376e0322521db1855c0830dadf595'
                    alt='Sweet Potato Fries'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Sweet Potato Fries</b></Card.Text>
                <hr />
                <p>$1.99|Cal 460</p>
                <p>Thin cut sweet potatoes fried to perfection with a dash of salt.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/cf/cf8ce00e14e94a35894885bfc23bd0e2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=491574624bb92c1e5789dca3d3cd7659'
                    alt='Garlic Fries'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Garlic Fries</b></Card.Text>
                <hr />
                <p>$1.99|Cal 430</p>
                <p>Thick cut and fried to perfection with garlic Parmesan butter and Parmesan cheese.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/2e/2ed64b67412f438c9c603b8885c4e86c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=7fc953627c7bbda90766575d056a6e2c'
                    alt='Yukon Chips'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Yukon Chips</b></Card.Text>
                <hr />
                <p>$1.99|Cal 500</p>
                <p>Perfectly seasoned with Red Robin® Seasoning.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                    variant='top'
                    src='https://olo-images-live.imgix.net/c0/c0dc67397d094a8991cea5991a594267.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c38b60c048fa7c55df6c24c5e36794a6'
                    alt='Steamed Broccoli'
                    style={{ width: "100%", height: "10em" }} // Adjust height as needed
                />
                <Card.Text><b>Steamed Broccoli</b></Card.Text>
                <hr />
                <p>$1.99|Cal 30</p>
                <p>Fresh broccoli, steamed to perfection.</p>
                <Button type='submit'>Add To Bag</Button>
            </Card>

            <hr></hr>
        </Container>
    );
}