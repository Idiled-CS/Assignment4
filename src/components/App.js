import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import UserProfile from './UserProfile';
import Login from './Login';
import Debits from './Debits';


export default class App extends Component {

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

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
    
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => <Home accountBalance = {this.state.accountBalance} />
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince}/>
    )
    const DebitComponent = () => (<Debits />)

    return (
      <Router>
        <Switch>
            <Route exact path = "/" render = {HomeComponent}/>
            <Route exact path = "/userProfile" render = {UserProfileComponent} />
            <Route exact path = "/Login" render = {LogInComponent}/>
            <Route exact path = "/Debits" render = {DebitComponent}/>

        </Switch>
      </Router>
    );
  }
}
