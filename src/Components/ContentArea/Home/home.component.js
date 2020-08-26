import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './home.component.scss';

export const HomeComponent = () => {
    const years = new Date().getFullYear() - 2014;
    return (
        <div id="home">
            <section>
                <div>
                    {/* <h1>Vijay Mishra</h1> */}
                    <div id="name-img" alt="Vijay Mishra"></div>
                    <h6>Developer/Travel enthusiast</h6>
                </div>
                <Row>
                <Col>
                    <div className="profile-pic"></div>
                </Col>
                <Col>
                    <div>
                        <h1 className="greetings">Hello,</h1>
                        <h5>let me introduce myself: </h5>
                    </div>
                    <div>
                        <Row>
                        <Link to="/resume" className="nav-item nav-link">
                            <div className="my-resume sm-circle red-circle">&lt;My Resume /&gt;</div>
                        </Link>
                        <Link to="/project" className="nav-item nav-link">
                            <div className="my-work sm-circle cyan-circle">&lt;My Work /&gt;</div>
                        </Link>
                        <Link to="/skills" className="nav-item nav-link">
                            <div className="my-skills sm-circle yellow-circle">&lt;My Skills /&gt;</div>
                        </Link>
                        </Row>
                        <p className="brief-intro">
                            I am a full stack software developer, having {years}+ years of solid experience in enterprise web development. 
                            During this tenure I have used many tools and got exposed to different technologies. I am capable of working
                            on backend as well as front end development, nevertheless I feel more enthusiastic while working on frontend tech.
                            This site is developed solely by me and used React.  
                        </p>
                    </div>
                </Col>
            </Row>
            </section>
        </div>
    );
}
