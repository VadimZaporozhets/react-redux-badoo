import React, {Component} from 'react';
import ChatButton from '../components/chat-button-component';
import ProfileButton from '../components/profile-button-component';
import MatchesButton from '../components/matches-button-component';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <MatchesButton/>
                <ChatButton/>
                <ProfileButton/>
            </footer>
        );
    }
}

export default Footer;