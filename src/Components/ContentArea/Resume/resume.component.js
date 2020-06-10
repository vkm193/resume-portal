import React, { Component }  from 'react';
import './resume.component.scss';
import { Row, Col } from 'react-bootstrap';

export const ResumeComponent  = () => {
        return (
            <div id="resume">
                <section>
                    <div className="section-title page-title">
                        <span>Resume</span>
                    </div>
                </section>
                <Row>
                    <Col className="col-md-9">
                    <article id="purpose-statement">
                        <Row>
                            <Col className="col-md-4">
                            <div className="sm-circle red-circle">Purpose Statement</div>
                            </Col>
                            <Col className="col-md-8">
                                <p class="purpose-statement-text">
                            Having {new Date().getFullYear() - 2014}+ years of experience in software development, maintenance and implementation with 
                            object-oriented design. Have worked on technologies like .NET framework with good knowledge of MVC, 
                            ASP.Net, C#.Net, jQuery, Angular, SQL Server for commercial application development. Eager to learn 
                            and implement new technologies and trends which are introduced for better software development process.
                            </p>
                            </Col>
                        </Row>
                    </article>
                    <article id="professional-snapshot">
                        <Row>
                            <Col className="col-md-4">
                            <div className="sm-circle red-circle">Professional Snapshot</div>
                            </Col>
                            <Col className="col-md-8">
                                <article>
                                    <section>
                                        <div className="section-title">
                                            <span>Technical Consultant</span>
                                        </div>
                                        <a href="https://www.healthlevel.com/" target="_blank"><h6>Health Level Inc.</h6></a>
                                        <span class="tenure-text">(Jan 2020 to Present)</span>
                                        <div className="role-details">
                                            <ul className="dashed">
                                                <li>
                                                    <p>Development, bug fixing, peer code review, deployment.</p>
                                                </li>
                                                <li>
                                                    <p>Participate in recruitment program.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <div className="section-title">
                                            <span>Associate Lead Technology</span>
                                        </div>
                                        <a href="https://www.nagarro.com/" target="_blank"><h6>Nagarro Software</h6></a>
                                        <span class="tenure-text">(Apr 2018 to Jan 2020)</span>
                                        <div className="role-details">
                                            <ul className="dashed">
                                                <li>
                                                    <p>Writing frontend code, bug fixing, peer code review, deployment, 
                                                        post deployment support, documentation.</p>
                                                </li>
                                                <li>
                                                    <p>Co-ordination with client based in UK.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <div className="section-title">
                                            <span>Software Development Engineer</span>
                                        </div>
                                        <a href="https://www.emtecinc.com/" target="_blank"><h6>Emtec Technologies Pvt. Ltd.</h6></a>
                                        <span class="tenure-text">(Dec 2014 to Mar 2018)</span>
                                        <div className="role-details">
                                            <ul className="dashed">
                                                <li>
                                                    <p>Wrote code for backend as well as frontend, wrote unit test, 
                                                    bug fixing, peer code review, post deployment support, documentation.</p>
                                                </li>
                                                <li>
                                                    <p>Co-ordination with US based Client&nbsp;
                                                    <a href="https://www.coyote.com" target="_blank"></a><h6>Coyote</h6>. 
                                                    Taking requirement and analysis to suggest better approach.</p>
                                                </li>
                                                <li>
                                                    <p>Working in Agile model gives me opportunity to participate in sprint 
                                                    planning and scrum meeting and standup</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </article>
                                <article>
                                    <section>
                                        <div className="section-title">
                                            <span>Software Developer</span>
                                        </div>
                                        <a href="http://fortytwo.co.in/" target="_blank"><h6>Fortytwo Software</h6></a>
                                        <span class="tenure-text">(Nov 2013 to Nov 2014)</span>
                                        <div className="role-details">
                                            <ul className="dashed">
                                                <li>
                                                    <p>Wrote code, bug fixing and participated in deployment process.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </article>
                                <section>
                                    <p>Developed Blog for a travel blogger <a href="http://www.roohyatri.com/"><h6>Rooh Yatri</h6></a>.</p>
                                </section>
                            </Col>
                        </Row>
                    </article>
                    <article id="education">
                            <Row>
                                <Col className="col-md-4">
                                <div className="sm-circle red-circle">Education</div>
                                </Col>
                                <Col className="col-md-8">
                                    <ul className="dashed">
                                        <li>
                                            <p>Master in Computer Application from Pune University</p>
                                        </li>
                                        <li>
                                            <p>Bachelor in Computer Application from IGNOU</p>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </article>
                    </Col>
                    <Col className="col-md-3">
                    </Col>
                </Row>
            </div>
        )
    }