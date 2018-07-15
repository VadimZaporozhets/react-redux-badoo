import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatItem from '../components/chat-item-component';

const mapStateToProps = (state) => {
    return {
        matchesArray: state.matchesInfo.matchesArray
    }
}

class Chat extends Component {
    renderChats = () => {
        return this.props.matchesArray.map(match => 
            <ChatItem key={match.id} photo={match.photos[0]}/>
        );
    }

    render() {
        return (
            <div className="chat">
                {this.renderChats()}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Chat);