import React from 'react';

const ProfileInfo = ({job, education, changeJob, changeEducation, name, age}) => {
    return (
        <div className="profile-info">
            <p className="profile-name">{`${name}, ${age}`}</p>
            <label className="profile-label">
                Job:
                <input value={job} onChange={changeJob} className="profile-input"/>
            </label>
            <label className="profile-label">
                Education:
                <input value={education} onChange={changeEducation} className="profile-input"/>
            </label>
        </div>
    );
}

export default ProfileInfo;