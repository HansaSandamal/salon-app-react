import React, {useState} from "react";
import cv3 from "../assets/images/cv7.jpg";
import {Button, Collapse, Image} from "react-bootstrap";
import MetaDecorator from "../components/MetaDecorator";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Booking: React.FC = () => {
    const [open, setOpen] = useState(true);


    return (
        <React.Fragment>
            <MetaDecorator title={"salon HUSH | Booking"} description={"booking online"}/>
            <Image src={cv3} alt='cover' fluid/>
            <div className='content'>
                <h1 className='font-link'><b>BOOK ONLINE</b></h1>
                <h4 className='font-link'><b>Welcome</b></h4>
                <h5 className='font-link'>Thank you for choosing salon HUSH! Click below to book your appointment.<br/>

                    Please come alone for your service to limit exposure, due to Covid-19. Also, please review our
                    cancellation policy located on this site under services & policies.
                    All guest are required to wear a mask the entirety of their service.<br/>

                    If you would like to schedule an appointment for color, please call
                    011 2949308. Color is not offered via online booking.<br/>

                    Thank you!</h5>
                <br/>
                <Button onClick={() => setOpen(false)}
                        variant="dark">Sign In</Button>
                <Button onClick={() => setOpen(true)}
                        variant="outline-dark">Sign Up</Button>


                <Collapse in={!open}>
                    <div id="example-collapse-text">
                        <SignIn email={''} password={''}/>
                    </div>
                </Collapse>

                <Collapse in={open}>
                    <div id="example-collapse-text2">
                        <SignUp email={''} name={''} isCheck={false} password={''}/>
                    </div>
                </Collapse>

                <br/>


            </div>
        </React.Fragment>
    )
}
export default Booking;