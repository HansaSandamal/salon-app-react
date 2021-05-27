import React from "react";
import cv1 from "../assets/images/cv1.jpg";
import {Button, Container, Form, Image} from "react-bootstrap";
import { MDBIcon } from "mdbreact";

import Swal from "sweetalert2";

const Contact: React.FC = () => {
    const handleOnClick=()=>Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    });

    return (

        <Container fluid={true} className='content-contact'>
            <Image src={cv1} alt='cover' fluid/>
            <h1 className='font-link-title'><b>CONTACTS</b></h1>
            <div className="row justify-content-md-center">

                <div className="col col-lg-2">
                    <h5 className='font-link'><b>Salon HUSH</b></h5>
                    <h6 className='font-link'>1122 Thomasville Rd., Ste. 6<br/>
                        Tallahassee, FL 32303</h6>
                    <h5 className='font-link'><b>HOURS</b></h5>
                    <h6 className='font-link'>Monday – Saturday 9am – 8pm
                        <br/>
                        Sunday Closed</h6>
                    <MDBIcon fab icon="facebook-f"/>
                    <MDBIcon className="ml-2" fab icon="instagram"/>

                </div>
                <div className="col-md-auto">
                    <h5 className='font-link'><b>SEND US A MESSAGE</b></h5>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button  variant="dark" type="submit" onClick={() => handleOnClick()}>
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>

        </Container>
    )
}
export default Contact;