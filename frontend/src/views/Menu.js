// Menu.js
import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

import Salads from './Menu/Salads';
import Burgers from './Menu/Burgers';
import Sides from './Menu/Sides';
import Desserts from './Menu/Dessert';

export default function Menu() {
  const initialArray = JSON.parse(localStorage.getItem('bag')) || []
  const [bag, setBag] = useState(initialArray)
  return (
    <Container>
      {/* Render each section separately */}

      {/* lift up the state */}


      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>SALADS</h1>
        <Salads 
          setBag={setBag} 
          bag={bag} 
          />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>BURGERS</h1>
        <Burgers 
          setBag={setBag} 
          bag={bag} 
          />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>SIDES</h1>
        <Sides 
          setBag={setBag} 
          bag={bag} 
          />
      </Card>

      <Card style={{ border: '1px solid black', textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>DESSERTS</h1>
        <Desserts 
          setBag={setBag} 
          bag={bag} 
          />
      </Card>
    </Container>
  );
}
