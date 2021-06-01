import React from "react";
import {Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/images/icon2.png";

const Header: React.FC = () => {
    return (
        <Navbar className='font-link' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"> <Image className="img-fluid img-thumbnail opacity-60 col-sm-12 " src={logo}
                                           alt="cover" roundedCircle/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>

                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/salon">Salon</NavDropdown.Item>

                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/treatments">HAIR TREATMENT</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">ABOUT US</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/booking">BOOK ONLINE</Nav.Link>
                    <Nav.Link eventKey={2} href="/contacts">
                        CONTACTS
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;
