import React from "react";
import cv1 from "../assets/images/cv1.jpg";
import {Button, Container, Form, Image} from "react-bootstrap";
import {MDBIcon} from "mdbreact";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import MetaDecorator from "../components/MetaDecorator";

type ContactState = {
    email: string
    password: string
    text: string
}
const Contact: React.FC<ContactState> = (state) => {
    const {register, handleSubmit, formState: {errors}} = useForm<ContactState>();
    const onSubmit = handleSubmit(data => {
        // alert(JSON.stringify(data))
        console.log(data)
    });
    const handleOnClick = () => Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been send',
        showConfirmButton: false,
        timer: 1500,

    });

    return (

        <Container fluid={true} className='content-contact'>
            <MetaDecorator title={"salon HUSH | contacts"} description={"contacts"}/>
            <Image src={cv1} alt='cover' fluid/>
            <h1 className='font-link-title'><b>CONTACTS</b></h1>
            <div className="row justify-content-md-center">

                <div className="col col-lg-2">
                    <h5 className='font-link'><b>Salon HUSH</b></h5>
                    <h6 className='font-link'> 344 Temple Rd.,<br/>
                        Colombo 07, <br/>FL 32303
                    </h6>
                    <h5 className='font-link'><b>HOURS</b></h5>
                    <h6 className='font-link'>Monday – Saturday 9am – 8pm
                        <br/>
                        Sunday Closed</h6>
                    <MDBIcon fab icon="facebook-f"/>
                    <MDBIcon className="ml-2" fab icon="instagram"/>

                </div>
                <div className="col-md-auto">
                    <h5 className='font-link'><b>SEND US A MESSAGE</b></h5>

                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register('email')} type="email" placeholder="Enter email"/>
                            {errors.email && <p>* email is required</p>}
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control{...register('password')} type="password" placeholder="Password"/>
                            {errors.password && <p>* password is required</p>}
                        </Form.Group>

                        <Form.Group controlId="formBasicTextArea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control {...register('text')} as="textarea" placeholder="Type your message" rows={3}/>
                            {errors.text && <p>* message is required</p>}
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="dark" type="submit" onClick={() => handleOnClick()}>
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>

        </Container>
    )
}
export default Contact;