import React from 'react';

const ChatItem = ({photo}) => {
    return (
        <div className="chat-item-wrapper">
            <div className="chat-avatar-wrapper">
                <img className="chat-avatar" src={`/img/${photo}`} alt=""/>
            </div>
            <p className="chat-text">You have a match. Type first mess...</p>
        </div>
    );
}

export default ChatItem;