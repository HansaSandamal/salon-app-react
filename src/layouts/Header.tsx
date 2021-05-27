import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header:React.FC=()=>{
    return(
        <Navbar className='font-link' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Salon HUSH</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>

                    <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">ABOUT US</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">BOOK ONLINE</Nav.Link>
                    <Nav.Link eventKey={2} href="/contacts">
                        CONTACTS
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;
