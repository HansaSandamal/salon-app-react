import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";


const SignIn = () => {
    return (
        <Form className="form">
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Password
                </Form.Label>
                <Col sm={4}>
                    <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 5, offset: 2 }}>
                    <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 5, offset: 2 }}>
                    <Button  variant="dark" type="submit">Sign in</Button>
                </Col>
            </Form.Group>
        </Form>
    );
};

export default SignIn;