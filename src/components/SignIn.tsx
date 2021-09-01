import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

type SignInState = {
    email: string
    password: string
}
const SignIn: React.FC<SignInState> = (state) => {

    const {register, handleSubmit,formState:{errors}} = useForm<SignInState>();
    const onSubmit= handleSubmit((data) =>{
      alert(JSON.stringify(data))

  } )
    return (
        <Form className="form" onSubmit={onSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={4}>
                    <Form.Control {...register('email')} type="email" placeholder="Email"/>
                    {errors.email && <p>* email is required</p>}
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={4}>
                    <Form.Control {...register('password')} type="password" placeholder="Password"/>
                    {errors.password && <p>* password is required</p>}
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{span: 5, offset: 2}}>
                    <Form.Check label="Remember me"/>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{span: 5, offset: 2}}>
                    <Button variant="dark" type="submit">Sign in</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default SignIn;