import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ContainerRegistro, FormContainer, TextContainer } from '../styles/Styles';
import { endPoint } from '../helpers/Url';

export default class Login extends Component {

    constructor(){
        super();
        this.state = {
            user: { 
                email: '',
                password: ''
            }

        }
    }

    hadleInputChange = ({target}) => {
        this.setState({
            user:{
                ...this.state.user,
                [target.name]: target.value
            }
        })
        console.log(this.state.user);
    }

    getUser = async() =>{
        const resp = await fetch(endPoint);
        const result = await resp.json();

        const valid = result.find( user => user.email === this.state.user.email )

        if (valid) {
            valid.password === this.state.user.password ? alert("Welcome"): alert("Contraseña Incorrecta")
        }else{
            alert("Usuario no registrado")
        }   
        
    } 

    hadleSubmit = (e) =>{
        e.preventDefault();
        this.getUser();
    }

    

  render() {

    

    return <ContainerRegistro>
        <TextContainer>
            <h2>Learn to code by watching others</h2>
        </TextContainer>
        <FormContainer>
            <Form onSubmit={this.hadleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.hadleInputChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={this.hadleInputChange} required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    CLAIM YOUR FREE TRIAL
                </Button>
            </Form>
        </FormContainer>
    </ContainerRegistro>;
  }
}

