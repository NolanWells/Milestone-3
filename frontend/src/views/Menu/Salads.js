import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

export default function Salads() {

    return (
        <Container>
        <Card style={{ border: '1px solid black', textAlign: 'center' }}>
            <p>House Salad</p>
        </Card>

        <Card style={{ border: '1px solid black', textAlign: 'center'}}>
            <p>Avo-Cobb-O Salad</p>
        </Card>

        <Card style={{ border: '1px solid black', textAlign: 'center'}}>
            <p>Cripsy Chicken Tender Salad</p>
        </Card>

        <Card style={{ border: '1px solid black', textAlign: 'center'}}>
            <p>Simply Grilled Chicken Salad</p>
        </Card>
        <Card style={{ border: '1px solid black', textAlign: 'center'}}>
            <p>Southwest Salad</p>
        </Card>

        </Container>
    )
}