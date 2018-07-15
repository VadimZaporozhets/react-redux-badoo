import React from 'react';
import {Link} from 'react-router-dom';

const MatchContinueBtn = () => {
    return (
        <Link to="/">
            <button className="match-btn">Close</button>
        </Link>
    );
}

export default MatchContinueBtn;