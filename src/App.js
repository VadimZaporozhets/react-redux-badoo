import React, { Component } from 'react';
import './App.css';
import Header from './containers/header-container';
import Footer from './containers/footer-container';
import Matches from './containers/matches-container';
import Match from './containers/match-container';
import Profile from './containers/profile-container';
import Chat from './containers/chat-container';
import Filter from './containers/filter-container';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header/>
                <Switch>
                    <Route exact path="/" component={Matches}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/filter" component={Filter}/>
                    <Route path="/match/:id" component={Match}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
