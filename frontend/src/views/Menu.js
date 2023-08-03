// Menu.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

import Salads from './Menu/Salads';
import Burgers from './Menu/Burgers';
import Sides from './Menu/Sides';
import Desserts from './Menu/Dessert';

export default function Menu() {
  return (
    <Container style={{ overflowX: 'auto' }}>
      {/* Render each section separately */}
      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>SALADS</h1>
        <Salads />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>BURGERS</h1>
        <Burgers />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>SIDES</h1>
        <Sides />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>DESSERTS</h1>
        <Desserts />
      </Card>
    </Container>
  );
}
