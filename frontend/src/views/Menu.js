import React from 'react';
import { Container, Card } from 'react-bootstrap';

import Salads from './Menu/Salads';
import Burgers from './Menu/Burgers';

export default function Menu() {
    return (
        <Container style={{ display: 'grid', placeItems: 'center' }}>
            <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>SALADS</h1>
                <Salads />
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>BURGERS</h1>
                <Burgers />
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                <h1>SIDES</h1>
            </Card>

            <Card style={{ border: '1px solid black', textAlign: 'center' }}>
                <h1>DESSERTS</h1>
            </Card>
        </Container>
    );
}
