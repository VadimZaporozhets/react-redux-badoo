import React, {Component} from 'react';
import {connect} from 'react-redux';
import MatchImagesComponent from '../components/match-images-component';
import MatchContinueBtn from '../components/match-continue-btn';
import MatchMessagesBtn from '../components/match-messages-btn';

const mapStateToProps = (state) => {
    return {
        likedUsers: state.matchesInfo.likedUsers,
        profileInfo: state.profileInfo
    }
}

class Match extends Component {
    render() {
        const {match, likedUsers, profileInfo} = this.props;
        const currentUserId = match.params.id;
        const currentUser = likedUsers.find((user) => {
           return user.id == currentUserId;
        });

        return(
            <div className="match">
                <MatchImagesComponent memberImgSrc={profileInfo.photos[0]} userName={currentUser.name} userImgSrc={currentUser.photos[0]}/>
                <MatchMessagesBtn/>
                <MatchContinueBtn/>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Match);