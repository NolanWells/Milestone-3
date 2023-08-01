import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";

export default function Login() {
    return (
        <Container className='fixed-top'>
            <h2 style={{ textAlign: "center" }}>Create an Account</h2>
            <Card style={{ textAlign: "center" }}>
                <label for='username'>Username:</label> <br />
                <input type='text' id='username' placeholder="Username" required />

                <br />
                <br />

                <label for="password">Password:</label> <br />
                <input type="password" id="passwork" placeholder="Password" required />

                <br />
                <br />

                <Button>Submit</Button>
            </Card>
        </Container >
    )
}