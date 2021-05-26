import React from "react";
import cv3 from "../assets/images/cv3.jpg";
import {Image} from "react-bootstrap";

const About: React.FC = () => {
    return (
        <React.Fragment>
            <Image src={cv3} alt='cover' fluid/>
            <div className='content'>
                <h1 className='font-link'><b>ABOUT US</b></h1>
                <h4 className='font-link'><b>THE EIGHT FIVE ZERO SALON DIFFERENCE</b></h4>
                <h5 className='font-link'>Our carefully chosen and highly trained staff is here to exceed your <br/>expectations.
                    The same goes for our elegant salon space – dedicated to <br/>guest comfort – and our devotion
                    to innovation and artistry. We’re focused <br/>on making your day and continually raising the
                    bar.<br/><br/>

                    We are also proud to align with Aveda’s mission of ethical and sustainable<br/> business
                    practices and its high-fashion aesthetic. We share Aveda’s <br/>exceptional standards of quality
                    products, treatments, and guest care, and<br/> everything we do reflects the standards of an
                    Aveda Salon.</h5>

            </div>
        </React.Fragment>
    )
}
export default About;