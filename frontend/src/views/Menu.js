import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import Salads from './Menu/Salads'
import Burgers from './Menu/Burgers'
import Dessert from './Menu/Dessert'
import Sides from './Menu/Sides'


export default function Menu() {

    return (
        <Container style={{ display: 'grid', placeItems: 'center' }}>
            <h1>SALADS</h1>
            <h2>----------------------------------------------------</h2>
            <Salads/>


            <Card style={{ border: '1px solid black', textAlign: 'center'}}>
                <h1>BURGERS</h1>
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center'}}>
                <h1>SIDES</h1>
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center'}}>
                <h1>DESERTS</h1>
            </Card>
        </Container>
    );
}