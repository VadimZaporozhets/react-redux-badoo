import React from 'react';

const MatchesInfo = ({name, job, education}) => {
    return (
        <div className="matches-info-wrapper">
            <p className="matches-info-name">{name}</p>
            <p className="matches-info">Education: {education}</p>
            <p className="matches-info">Job: {job}</p>
        </div>
    );
}

export default MatchesInfo;