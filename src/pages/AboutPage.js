import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage () {
    return (
        <div className="AboutPage container">
            <Card>
                <h1>About Page</h1>
                <p className="info-one">This is a React app that allows feedback for a product or service.</p>
                <p className="info-two">The user can add a comment along with a rating of 1-10. The comments can also be deleted, or even edited.</p>
                <p className="info-version">Version: 1.5</p>
                <Link to='/'>Back to Home</Link>
            </Card>
        </div>
    )
}

export default AboutPage;