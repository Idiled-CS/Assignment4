import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import UserProfile from './UserProfile';


export default class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      accountBalance: 12341,

      currentUser: {
        userName: "Joe_Shmo",
        memberSince: "07/23/96",
      }
    }
  };
  render() {
    
    const HomeComponent = () => <Home accountBalance = {this.state.accountBalance} />
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince}/>
    )

    return (
      <Router>
        <Switch>
            <Route exact path = "/" render = {HomeComponent}/>
            <Route exact path = "/userProfile" render = {UserProfileComponent} />
        
        </Switch>
      </Router>
    );
  }
}
