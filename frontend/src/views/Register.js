import React ,{useState}from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";

const Register = () => {
    const [user,setUser] = useState({
        email:"",
        username: "",
        password: "",
        repassword:"",
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
const handleSubmit = async()=>{

    await axios.post("http://localhost:5000/register",user)
    .then(res =>console.log(res))
}
    return (
        <Container className='fixed-top'>
            <h2 style={{ textAlign: "center" }}></h2>
            <Card style={{ textAlign: "center" }}>
                <h1>Register</h1>
                <label for="email">Email</label><br />
                <input type="text" id="email" placeholder="Email" name="email" value={user.email} onChange={handleChange}
                />

                <br />
                <br />

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

                <label for="re-password">Re-Password:</label> <br />
                <input type="password" id="re-password" placeholder="Re-Password" name="repassword" value={user.repassword} onChange={handleChange}
                />

                <br />
                <br />

                <Button className="btn" onClick={handleSubmit}>Submit</Button>
            </Card>
        </Container >
    )
}

export default Register