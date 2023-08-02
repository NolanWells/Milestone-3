import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { Container, Card } from 'react-bootstrap';
import React from 'react';

import Salads from './Menu/Salads'
import Burgers from './Menu/Burgers'
import Dessert from './Menu/Dessert'
import Sides from './Menu/Sides'


export default function Menu() {

    return (
        <Container style={{ display: 'grid', placeItems: 'center' }}>
            <h1>SALADS</h1>
            <h2>----------------------------------------------------</h2>
            <Card style={{ border: '1px solid black', textAlign: 'center', maxWidth: '80%' }}>
                <Salads />
            </Card>


            <Card style={{ border: '1px solid black', textAlign: 'center', maxWidth: '80%' }}>
                <h1>BURGERS</h1>
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center', maxWidth: '80%' }}>
                <h1>SIDES</h1>
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center', maxWidth: '80%' }}>
                <h1>DESERTS</h1>
            </Card>
        </Container>
    );

}