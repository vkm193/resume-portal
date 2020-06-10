import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebook, FaStackOverflow, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./footer.component.scss";

export const FooterComponent  = () => {
        return (
            <div id="footer-area">
            <Navbar expand="lg" sticky="bottom" className="navbar-light">
                <Nav className="mr-auto">
                &copy; {new Date().getFullYear()} Vijay Mishra
                </Nav>
                <Nav className="nav navbar-nav ml-auto social-icon">
                    <Nav.Link href="#" className="nav-link"><FaStackOverflow /></Nav.Link>
                    <Nav.Link href="#" className="nav-link"><FaGithub /></Nav.Link>
                    <Nav.Link href="#" className="nav-link"><FaLinkedin /></Nav.Link>
                    <Nav.Link href="#" className="nav-link"><FaFacebook /></Nav.Link>
                    <Nav.Link href="#" className="nav-link"><FaTwitter /></Nav.Link>
                </Nav>
            </Navbar>
            </div>
        );
    }