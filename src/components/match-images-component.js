import React from 'react';

const MatchImagesComponent = ({memberImgSrc, userName, userImgSrc}) => {
    return (
        <div className="match-images">
            <div className="match-images-wrapper">
                <div className="match-image-wrapper">
                    <img src={`/img/${memberImgSrc}`} alt="" className="matches-image"/>
                </div>
                <div className="match-image-wrapper">
                    <img src={`/img/${userImgSrc}`} alt="" className="matches-image"/>
                </div>
            </div>
            <p className="match-text">You and {userName} liked each other.</p>
        </div>
    );
}

export default MatchImagesComponent;