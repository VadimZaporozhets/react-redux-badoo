import React from 'react';
import {Link} from 'react-router-dom';

const MatchMessagesBtn = () => {
    return (
        <Link to="/chat">
            <button className="match-btn">Send message</button>
        </Link>
    );
}

export default MatchMessagesBtn;