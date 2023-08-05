import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";

export default function Login() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Create an Account</h2>
          <FormGroup className="p-2">

                <br />
                <br />

                <label for="password">Password:</label> <br />
                <input type="password" id="passwork" placeholder="Password" required />

          </FormGroup>
  
          <Button type="submit" className="align-self-center">Submit</Button>
        </Form>
      </div>
    )
}
export default Login