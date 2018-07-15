import React from 'react';
import {Link} from 'react-router-dom';

const ChatButton = () => {
    return(
        <Link to="/chat">
            <button className="footer-btn chat-icon"></button>
        </Link>
    )
}

export default ChatButton;