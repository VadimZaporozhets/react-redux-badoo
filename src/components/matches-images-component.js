import React from 'react';

const MatchesImages = ({images}) => {
    return(
        <div className="matches-images-wrapper">
            <img className="matches-image" src={`/img/${images[0]}`} alt=""/>
        </div>
    )
}

export default MatchesImages;