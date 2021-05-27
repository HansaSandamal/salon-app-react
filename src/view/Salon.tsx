import React from "react";
import cv2 from "../assets/images/cv2.jpg";
import {Container, Image} from "react-bootstrap";
import ServiceMenu from "../components/ServiceMenu";


const Salon: React.FC = () => {


    return (

        <Container fluid={true} className='content-contact'>
            <Image src={cv2} alt='cover' fluid/>
            <div className='container my-4'>
                <h1 className='font-link'><b>Salon HUSH</b></h1>
            </div>

            <div className="row justify-content-md-center">

                <div className="col col-lg-3">

                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Women's Cut
                            <span className="badge badge-dark badge-pill">30-150</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Men's Cut
                            <span className="badge badge-dark badge-pill">20-75</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Shampoo Style
                            <span className="badge badge-dark badge-pill">20-85</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Single Process Color
                            <span className="badge badge-dark badge-pill">50-100</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Half Head Highlight
                            <span className="badge badge-dark badge-pill">60-200</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Full Head Highlight
                            <span className="badge badge-dark badge-pill">80-225</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Smoothing Treatment Semi-Permanent
                            <span className="badge badge-dark badge-pill">250+</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Formal Style
                            <span className="badge badge-dark badge-pill">35+</span>
                        </li>
                    </ul>
                    <br/>
                    <h5 className='font-link'><b>WAXING AND TINTING</b></h5>
                    <br/>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Brow Wax
                            <span className="badge badge-dark badge-pill">$19</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Facial Wax
                            <span className="badge badge-dark badge-pill">$30</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Brow Tint
                            <span className="badge badge-dark badge-pill">$25</span>
                        </li>

                    </ul>
                    <br/>
                    <h5 className='font-link'><b>MAKEUP</b></h5>
                    <br/>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">

                            Makeup Application
                            <span className="badge badge-dark badge-pill">50+</span>
                        </li>


                    </ul>
                </div>
                <div className="col col-lg-2">

                </div>
                <div className="col-md-auto">

                    <ServiceMenu/>

                </div>

            </div>

        </Container>
    )
}
export default Salon;