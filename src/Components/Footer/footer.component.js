import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebook, FaStackOverflow, FaTwitter, FaLinkedin, FaGithub, FaQuora, FaMedium } from 'react-icons/fa';
import "./footer.component.scss";

export const FooterComponent  = () => {
        return (
            <div id="footer-area">
            <Navbar expand="lg" sticky="bottom" className="navbar-light">
                <Nav className="mr-auto">
                &copy; {new Date().getFullYear()} Vijay Mishra
                </Nav>
                <Nav className="nav navbar-nav ml-auto social-icon">
                    <Nav.Link href="https://stackoverflow.com/users/6382704/vijay-mishra" target="_blank" className="nav-link"><FaStackOverflow /></Nav.Link>
                    <Nav.Link href="https://github.com/vkm193" target="_blank" className="nav-link"><FaGithub /></Nav.Link>
                    <Nav.Link href="https://medium.com/@vkm193" target="_blank" className="nav-link"><FaMedium /></Nav.Link>
                    <Nav.Link href="https://www.quora.com/profile/Vijay-Mishra-36" target="_blank" className="nav-link"><FaQuora /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/vijay-mishra-27934062/" target="_blank" className="nav-link"><FaLinkedin /></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/vkm139/" target="_blank" className="nav-link"><FaFacebook /></Nav.Link>
                    <Nav.Link href="https://twitter.com/vkm193" target="_blank" className="nav-link"><FaTwitter /></Nav.Link>
                </Nav>
            </Navbar>
            </div>
        );
    }