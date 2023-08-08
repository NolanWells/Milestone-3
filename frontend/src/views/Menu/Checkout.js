import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import CheckoutBag from './CheckoutBag';

export default function Checkout() {

    return (
        <Container>
            
                <CheckoutBag />

            {/* <Button variant="primary" onClick={handleCheckout}>Checkout</Button> */}
        </Container>
    );
}
