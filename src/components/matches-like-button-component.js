import React from 'react';
import { withRouter } from 'react-router-dom'

const MatchesLikeButton = ({currentUserLikes, addMatch, memberId, clickLike, currentUser, history}) => {
    if (currentUserLikes.includes(memberId)) {
        return(
            <button
                onClick={() => {
                    clickLike(currentUser);
                    addMatch(currentUser);
                    history.push(`/match/${currentUser.id}`);
                }}
                className="matches-btn matches-like-icon"
            ></button>
        )
    } else {
        return(
            <button
                onClick={() => {clickLike(currentUser)}}
                className="matches-btn matches-like-icon"
            ></button>
        )
    }
}

export default withRouter(MatchesLikeButton);