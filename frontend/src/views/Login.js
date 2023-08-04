import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";
import React, {Component, useState} from "react";





export const Login = () => {
    const [user,setUser] = useState({
        username: " ",
        password: " ",
    })
    
    const handleChange = (e) => {
        const { name, value} = e.target;
        setUser((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }


    return (
        <Container className='fixed-top'>
            <h2 style={{ textAlign: "center" }}></h2>
            <Card style={{ textAlign: "center" }}>
                <h1>Login</h1>
                <label for='username'>Username:</label> <br />
                <input type='text' id='username' placeholder="Username" name="username" value={user.username} onChange={handleChange}
                />

                <br />
                <br />

                <label for="password">Password:</label> <br />
                <input type="password" id="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}
                />

                <br />
                <br />

                <Button className="btn">Submit</Button>
            </Card>
        </Container >
    )
}
export default Login