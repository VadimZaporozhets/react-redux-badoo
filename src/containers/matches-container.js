import React, {Component} from 'react';
import {connect} from 'react-redux';
import {likeUser, dislikeUser, addMatch} from '../actions/matches-actions';
import MatchesImages from '../components/matches-images-component';
import MatchesLikeButton from '../components/matches-like-button-component';
import MatchesDislikeButton from '../components/matches-dislike-button-component';
import MatchesInfo from '../components/matches-info-component';

const getFilteredUsers = (users, filterParams) => {
    return users.filter((user) => {
        return (user.age <= filterParams.age) && (user.gender === filterParams.gender);
    });
}

const mapStateToProps = (state) => {
    return {
        currentUser: getFilteredUsers(state.matchesInfo.allUsers, state.filterParams)[0],
        profileInfo: state.profileInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickLike: (user) => {
            dispatch(likeUser(user));
        },
        clickDislike: (userId) => {
            dispatch(dislikeUser(userId));
        },
        addMatch: (user) => {
            dispatch(addMatch(user));
        }
    }
}

class Matches extends Component {
    render() {
        const { currentUser, clickLike, clickDislike, profileInfo, addMatch} = this.props;

        if (currentUser) {
            return (
                <main className="matches">
                    <MatchesImages images={currentUser.photos} />
                    <MatchesInfo name={currentUser.name} job={currentUser.job} education={currentUser.education}/>
                    <div className="matches-actions">
                        <MatchesDislikeButton clickDislike={clickDislike} userId={currentUser.id}/>
                        <MatchesLikeButton addMatch={addMatch} currentUserLikes={currentUser.likesIds} memberId={profileInfo.id} clickLike={clickLike} currentUser={currentUser}/>
                    </div>
                </main>
            );
        } else {
            return (<p className="error-msg">There are no people with such params in your region.</p>);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matches);