import React from 'react';
import {Link} from 'react-router-dom';

const ProfileButton = () => {
    return(
        <Link to="/profile">
            <button className="footer-btn profile-icon"></button>
        </Link>
    )
}

export default ProfileButton;