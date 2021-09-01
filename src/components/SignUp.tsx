import React from "react";
import {Button, Col, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";

type SignUpState = {
    name: string
    password: string
    email: string
    isCheck: boolean
}

const SignUp: React.FC<SignUpState> = (state) => {

    const {register, handleSubmit,formState: { errors }} = useForm<SignUpState>();
    const onSubmit =handleSubmit((data) =>{
        alert(JSON.stringify(data))

    } )

    return (
        <Form className="form" onSubmit={onSubmit}>
            <Form.Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control {...register("name", { required: true })} placeholder="User Name"/>
                    {errors.name && <p>* User name is required.</p>}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("password", { required: true })} type="password" placeholder="Password"/>
                    {errors.password && <p>* Password is required.</p>}
                </Form.Group>
            </Form.Row>
            <br/>


            <Form.Group controlId="formGridAddress2">
                <Form.Label>Email</Form.Label>
                <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email"/>
                {errors.email && <p>* Email is required.</p>}
            </Form.Group>


            <Form.Group id="formGridCheckbox">
                <Form.Check {...register("isCheck")} type="checkbox" label="Check me out"/>
            </Form.Group>

            <Button variant="dark" type="submit">
                Sign Up
            </Button>
        </Form>
    )
}
export default SignUp;