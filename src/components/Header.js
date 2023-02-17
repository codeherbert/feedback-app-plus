import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="container primary-home-link">
                <h1>
                    <Link to="/">Feedback App</Link>
                </h1>                
            </div>
        </header>
    )
};

export default Header;