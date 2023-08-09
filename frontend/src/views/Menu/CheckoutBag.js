import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import items from './food/items';

export default function CheckoutBag() {


    const handleCheckout = () => {
        // Perform checkout logic here
        alert("Thank you for your purchase!");
        // You can redirect the user to a payment gateway or further processing.
        // For the sake of this barebones example, we'll simply display an alert message.
    };

    const bag = localStorage.getItem('bag')

    return (
        <Container>
            <h1>Checkout Bag</h1>
            
            <div>{ bag }</div>

            <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
        </Container>
    );
}

