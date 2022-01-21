import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { endPoint } from '../helpers/Url';
import { ContainerRegistro, FormContainer, TextContainer } from '../styles/Styles';


export default class Registro extends Component {
    
    constructor(){
        super();
        this.state = {

            registro: { 
                id: '',               
                nombre: '',
                apellido: '',
                email: '',
                password: ''
            }

        }
    }

    hadleInputChange = ({target}) => {
        this.setState({
            registro:{
                ...this.state.registro,
                [target.name]: target.value
            }
        })
        console.log(this.state.registro);
    }

    addRegistro = async()=> {
        const response = await fetch(endPoint);
        const result = await response.json();
        if(result.find( user => user.email === this.state.registro.email )){
            alert("correo ya registrado")
        }else{
            const data = await fetch(endPoint,{
                method: 'POST',
                body: JSON.stringify(this.state.registro),
                headers: {
                 "Content-Type": "application/json; charset=UTF-8"
                }
            })
            window.location.href = "/login";
        }
    }

    hadleSubmit = (e) =>{
        e.preventDefault();
        this.addRegistro();
    }

  render() {



    return <ContainerRegistro>
        <TextContainer>
            <h2>Learn to code by watching others</h2>
        </TextContainer>
        <FormContainer>
            <Form onSubmit={this.hadleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={this.hadleInputChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido" name="apellido" onChange={this.hadleInputChange} required/>
                </Form.Group>

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
