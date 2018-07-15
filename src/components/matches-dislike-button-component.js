import React from 'react';

const MatchesDislikeButton = ({clickDislike, userId}) => {
    return(
        <button onClick={() => {clickDislike(userId)}} className="matches-btn matches-dislike-icon"></button>
    )
}

export default MatchesDislikeButton;