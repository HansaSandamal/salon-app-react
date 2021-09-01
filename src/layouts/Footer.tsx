import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBBadge} from "mdbreact";
import logo from "../assets/images/icon.png";
import {Image} from "react-bootstrap";



const Footer: React.FC = () => {
    return (

        <MDBFooter color="elegant-color" className="font-link-small pt-4 mt-0">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="3" sm="3">
                        <h3 className="title">Salon HUSH</h3>
                        <p>
                            344 Temple Rd.,<br/>
                            Colombo 07, FL 32303<br/>
                            850.224.1814<br/>
                            <MDBBadge color="elegant-color">
                                <MDBIcon fab icon="facebook-f"/>
                            </MDBBadge>
                            <MDBBadge className="badge ml-2 " color="elegant-color">
                                <MDBIcon fab icon="instagram"/>
                            </MDBBadge>

                        </p>
                    </MDBCol>

                    <MDBCol md="3" sm="3">
                        <h5 className="title">HOURS</h5>
                        <ul>
                            <li className="list-unstyled">
                                Monday  <span className="date ml-3"> Closed</span>
                            </li>
                            <li className="list-unstyled">
                                Tuesday <span className="date ml-4">9-8</span>
                            </li>
                            <li className="list-unstyled">
                                Wednesday  <span className="date ml-2"> 9-8 </span>
                            </li>
                            <li className="list-unstyled">
                                Thursday <span className="date ml-3"> 9-8 </span>
                            </li>
                            <li className="list-unstyled">
                                Friday <span className="date ml-4"> 9-8 </span>
                            </li>
                            <li className="list-unstyled">
                                Saturday <span className="date ml-3"> 9-6 </span>
                            </li>
                            <li className="list-unstyled">
                                Sunday <span className="date ml-3"> Closed</span>
                            </li>
                        </ul>

                    </MDBCol>

                    <MDBCol md="3" sm="3">

                        <h5 className="title">EXPLORE</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/salon">Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#Specials">Specials</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/contacts">Contacts</a>
                            </li>

                        </ul>
                    </MDBCol>
                    <MDBCol md="2" sm="12">

                        <Image className="opacity-60 mr-1" src={logo} alt="logo" roundedCircle/>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a
                    href="https://www.mdbootstrap.com"> HUSHsalon.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;