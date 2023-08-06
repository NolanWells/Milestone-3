import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Checkout() {
    const products = [
        { id: 1, name: "Product 1", price: 19.99 },
        { id: 2, name: "Product 2", price: 29.99 },
        { id: 3, name: "Product 3", price: 9.99 }
    ];

    const handleCheckout = () => {
        // Perform checkout logic here
        alert("Thank you for your purchase!");
        // You can redirect the user to a payment gateway or further processing.
        // For the sake of this barebones example, we'll simply display an alert message.
    };

    return (
        <Container>
            <h1>Checkout Bag</h1>
            <ListGroup>
                {products.map(product => (
                    <ListGroup.Item key={product.id}>
                        <strong>{product.name}</strong> - ${product.price}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
        </Container>
    );
}
