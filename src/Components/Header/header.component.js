import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaStackOverflow, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./header.component.scss";
import "bootstrap/js/src/collapse.js";

export const HeaderComponent  = () => {
        return (
            <div id="header-area">
                <Nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link to="/" className="navbar-brand">
                        <img src="/logo.png" height="60" width="250" alt="Vijay Mishra" />
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Nav className="collapse navbar-collapse" id="navbarCollapse">
                        <Nav className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/resume" className="nav-item nav-link">Resume</Link>
                            <Link to="/projects" className="nav-item nav-link">Projects</Link>
                            <Link to="/skills" className="nav-item nav-link">Skills</Link>
                            <Link to="/connect" className="nav-item nav-link">Connect</Link>
                        </Nav>
                        <Nav className="navbar-nav ml-auto social-icon">
                            <Nav.Link href="https://stackoverflow.com/users/6382704/vijay-mishra" target="_blank" className="nav-link"><FaStackOverflow /></Nav.Link>
                            <Nav.Link href="https://github.com/vkm193" target="_blank" className="nav-link"><FaGithub /></Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/vijay-mishra-27934062/" target="_blank" className="nav-link"><FaLinkedin /></Nav.Link>
                            <Nav.Link href="https://www.facebook.com/vkm139/" target="_blank" className="nav-link"><FaFacebook /></Nav.Link>
                            <Nav.Link href="https://twitter.com/vkm193" target="_blank" className="nav-link"><FaTwitter /></Nav.Link>
                        </Nav>
                    </Nav>
                </Nav>
            </div>
        );
    }