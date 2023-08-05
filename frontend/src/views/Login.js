import { useState } from "react";
import { Navigate } from 'react-router-dom'
import { Button, Form, FormGroup } from "react-bootstrap";


export default function Login() {


    const [user, setUser] = useState({
        Username: '',
        Password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        return <Navigate to="/"/> 
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: "center" }}>Create an Account</h2>
          <FormGroup className="p-2">

            <Form.Label htmlFor='Username'>Username:</Form.Label>
            <Form.Control 
            type='text' 
            id='Username' 
            placeholder="Username" 
            required className="mb-3" 
            onChange={e => setUser({ ...user, Username: e.target.value })}
            value={user.Username}
            name="Username"
            />
  
            <Form.Label htmlFor="Password">Password:</Form.Label>
            <Form.Control 
            type="Password" 
            id="Password" 
            placeholder="Password" 
            required className="mb-3" 
            value={user.password}
            onChange={e => setUser({...user, Password:e.target.value})}
            name="Password"
            />

          </FormGroup>
  
          <Button type="submit" className="align-self-center">Submit</Button>
        </Form>
      </div>
    )
}