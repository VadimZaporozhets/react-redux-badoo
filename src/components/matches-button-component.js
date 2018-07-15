import React from 'react';
import {Link} from 'react-router-dom';

const MatchesButton = () => {
    return(
        <Link to="/">
            <button className="footer-btn matches-icon"></button>
        </Link>
    )
}

export default MatchesButton;