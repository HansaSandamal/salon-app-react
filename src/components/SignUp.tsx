import React from "react";
import {Button, Col, Form} from "react-bootstrap";

const SignUp: React.FC = () => {
    return (
        <Form className="form">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control placeholder="User Name"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
            </Form.Row>
            <br/>


            <Form.Group controlId="formGridAddress2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>

            </Form.Group>


            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Sign Up
            </Button>
        </Form>
    )
}
export default SignUp;