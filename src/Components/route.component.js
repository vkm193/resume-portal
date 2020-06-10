import React from 'react';
import { HomeComponent } from './ContentArea/Home/home.component';
import { ResumeComponent } from './ContentArea/Resume/resume.component';
import { Route }from 'react-router-dom';

export const RouteComponent = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={HomeComponent}  />
            <Route path="/resume" component={ResumeComponent} />
        </React.Fragment>
    );
}