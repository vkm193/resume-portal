import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaStackOverflow, FaTwitter, FaLinkedin, FaGithub, FaMedium, FaQuora  } from 'react-icons/fa';
import "./header.component.scss";
import "bootstrap/js/src/collapse.js";

export const HeaderComponent  = () => {
        return (
            <div id="header-area">
                <Nav className="navbar navbar-expand-md navbar-light bg-light">
                    {/* <Link to="/" className="navbar-brand">
                        <img src="/logo.png" height="60" width="250" alt="Vijay Mishra" />
                    </Link> */}
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Nav className="collapse navbar-collapse" id="navbarCollapse">
                        <Nav className="navbar-nav left-menu">
                            <NavLink to="/" exact className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/resume" className="nav-item nav-link">Resume</NavLink>
                            <NavLink to="/projects" className="nav-item nav-link">Projects</NavLink>
                            <NavLink to="/skills" className="nav-item nav-link">Skills</NavLink>
                            <NavLink to="/connect" className="nav-item nav-link">Connect</NavLink>
                        </Nav>
                        <Nav className="navbar-nav ml-auto social-icon">
                            <Nav.Link href="https://stackoverflow.com/users/6382704/vijay-mishra" target="_blank" className="nav-link"><FaStackOverflow /></Nav.Link>
                            <Nav.Link href="https://github.com/vkm193" target="_blank" className="nav-link"><FaGithub /></Nav.Link>
                            <Nav.Link href="https://medium.com/@vkm193" target="_blank" className="nav-link"><FaMedium /></Nav.Link>
                            <Nav.Link href="https://www.quora.com/profile/Vijay-Mishra-36" target="_blank" className="nav-link"><FaQuora /></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/vijay-mishra-27934062/" target="_blank" className="nav-link"><FaLinkedin /></Nav.Link>
                            <Nav.Link href="https://www.facebook.com/vkm139/" target="_blank" className="nav-link"><FaFacebook /></Nav.Link>
                            <Nav.Link href="https://twitter.com/vkm193" target="_blank" className="nav-link"><FaTwitter /></Nav.Link>
                        </Nav>
                    </Nav>
                </Nav>
            </div>
        );
    }