/**
 * Created by n0256343 on 3/16/2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Pluralsight Adminstration</h1>
                <p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;