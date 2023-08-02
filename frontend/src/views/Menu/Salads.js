import React from 'react';
import { Card, CardGroup, CardImg, Container } from 'react-bootstrap';

export default function Salads() {

    return (
        <Container>
            <CardGroup className ='d-flex' style={{ placeItems: 'center' }}>

                <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                    <CardImg
                        variant='top'
                        src='https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3'
                        alt='House Salad'
                        style={{ width: "30em", height: "30em" }}
                        />
                    <Card.Text>House Salad</Card.Text>
                </Card>

                <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                        variant='top'
                        src='https://olo-images-live.imgix.net/9e/9efeee6016444d9c97251455b0c3b616.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4337783f273b19b29c317c01cfbfd994'
                        alt='House Salad'
                        style={{ width: "30em", height: "30em" }}
                        />
                    <Card.Text>Avo-Cobb-O Salad</Card.Text>
                </Card>

                <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                        variant='top'
                        src='https://olo-images-live.imgix.net/0b/0b5f34af166e48088f1376f1195c7b92.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4322e13975b523500ad3b2a260e05997'
                        alt='House Salad'
                        style={{ width: "30em", height: "30em" }}
                        />
                    <Card.Text>Crispy Chicken Tender Salad</Card.Text>
                </Card>

                <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                        variant='top'
                        src='https://olo-images-live.imgix.net/ea/ea83c5817fee41c7be291c6a5dddca56.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=6f5b7dc47f2225474544292361a0a960'
                        alt='House Salad'
                        style={{ width: "30em", height: "30em" }}
                        />
                    <Card.Text>Simply Grilled Chicken Salad</Card.Text>
                </Card>

                <Card className='p-2 flex-fill' style={{ textAlign: 'center' }}>
                <CardImg
                        variant='top'
                        src='https://olo-images-live.imgix.net/5b/5bffbe920a114245be9587a94407d641.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f0a6209bcf27e2e9cf4770d283853a57'
                        alt='House Salad'
                        style={{ width: "30em", height: "30em" }}
                        />
                    <Card.Text>Southwest Salad</Card.Text>
                </Card>


            </CardGroup>
            <hr></hr>
        </Container>
    )
}