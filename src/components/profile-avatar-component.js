import React from 'react';

const ProfileAvatar = ({photo}) => {
    return (
        <div className="profile-avatar-wrapper">
            <img className="profile-avatar" src={`/img/${photo}`} alt=""/>
        </div>
    );
}

export default ProfileAvatar;