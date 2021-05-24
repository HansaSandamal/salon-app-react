import React from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBBadge} from "mdbreact";

const Footer: React.FC = () => {
    return (
        <MDBFooter color="elegant-color" className="font-small pt-4 mt-0">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Salon HUSH</h5>
                        <p>
                            1122 Thomasville Rd., Ste. 6<br/>
                            Tallahassee, FL 32303<br/>
                            850.224.1814<br/>
                            <MDBBadge color="elegant-color">
                                <MDBIcon fab icon="facebook-f" />
                            </MDBBadge>
                            <MDBBadge className="badge ml-2 " color="elegant-color">
                                <MDBIcon fab icon="instagram" />
                            </MDBBadge>

                        </p>
                    </MDBCol>

                    <MDBCol md="1">
                        <h5 className="title">HOURS</h5>

                        <ul>
                            <li className="list-unstyled">
                                Monday
                            </li>
                            <li className="list-unstyled">
                                Tuesday
                            </li>
                            <li className="list-unstyled">
                                Wednesday
                            </li>
                            <li className="list-unstyled">
                                Thursday
                            </li>
                            <li className="list-unstyled">
                                Friday
                            </li>
                            <li className="list-unstyled">
                                Saturday
                            </li>
                            <li className="list-unstyled">
                                Sunday
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title"><br/></h5>
                        <ul>
                            <li className="list-unstyled">
                                Closed
                            </li>
                            <li className="list-unstyled">
                                9-8
                            </li>
                            <li className="list-unstyled">
                                9-8
                            </li>
                            <li className="list-unstyled">
                                9-8
                            </li>
                            <li className="list-unstyled">
                                9-8
                            </li>
                            <li className="list-unstyled">
                                9-6
                            </li>
                            <li className="list-unstyled">
                                Closed
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="1">

                        <h5 className="title">EXPLORE</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="#">Services</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Specials</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#">Contacts</a>
                            </li>

                        </ul>
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