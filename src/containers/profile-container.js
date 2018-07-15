import React, {Component} from 'react';
import {connect} from 'react-redux';
import {profileChangeJob, profileChangeEducation} from '../actions/profile-actions';
import ProfileAvatar from '../components/profile-avatar-component';
import ProfileInfo from '../components/profile-info-component';

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profileInfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeJob: (e) => {
            dispatch(profileChangeJob(e.target.value));
        },
        changeEducation: (e) => {
            dispatch(profileChangeEducation(e.target.value));
        }
    }
}

class Profile extends Component {
    render() {
        const photo = this.props.profileInfo.photos[0];
        const {changeJob, changeEducation} = this.props;
        
        return (
            <main className="profile">
                <ProfileAvatar photo={photo}/>
                <ProfileInfo changeJob={changeJob} changeEducation={changeEducation} {...this.props.profileInfo}/>
            </main>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);