import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import UserProfile from './UserProfile';
import Login from './Login';
import Debits from './Debits';
import Credits from './Credits';


export default class App extends Component {

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  debitSubmission = (debInfo) => {
    this.state.debits.push(debInfo)

    console.log(this.state.debits);

  }

  creditSubmission = (credInfo) => {
    this.state.credits.push(credInfo)

    console.log(this.state.credits);
  }

  accountBalanceCalculator = () => {
    var debitTotal = 0
    var creditTotal = 0

    this.state.credits.map((cred) => creditTotal += cred.amount )
    this.state.debits.map((deb) => debitTotal += deb.amount )

    console.log(debitTotal)
    console.log(creditTotal)

    this.setState(
      {accountBalance:Math.round((creditTotal - debitTotal) * 100) / 100}
    )

    console.log(this.state.accountBalance)
  }


  constructor(props){
    super(props);
  
    this.state = {
      accountBalance: 0,

      currentUser: {
        userName: "Joe_Shmo",
        memberSince: "07/23/96",
      },

        credits:[],

        debits:[],
    }
  };

  componentDidMount = async () => {
      await fetch("https://moj-api.herokuapp.com/credits")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              credits: json,

          })

          console.log(this.state.credits)
      })
      .catch((err) => {
          console.log(err)
          return 0
      })

      await fetch("https://moj-api.herokuapp.com/debits")
      .then((res) => res.json())
      .then((json) => {
          this.setState({
              debits: json,

          })

          console.log(this.state.debits)
      })
      .catch((err) => {
        console.log(err)
        return 0
    })

    this.accountBalanceCalculator()
  }
  render() {
    
    const LogInComponent = () => (<Login user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const HomeComponent = () => <Home accountBalance = {this.state.accountBalance} />
    const UserProfileComponent = () => (
      <UserProfile userName = {this.state.currentUser.userName} memberSince = {this.state.currentUser.memberSince}/>
    )
    const DebitComponent = () => (<Debits calculate = {this.accountBalanceCalculator} debits = {this.state.debits} accountBalance = {this.state.accountBalance} debitSubmission = {this.debitSubmission}/>)
    const CreditComponent = () => (<Credits calculate = {this.accountBalanceCalculator} credits = {this.state.credits} accountBalance = {this.state.accountBalance} creditSubmission = {this.creditSubmission}/>)

    return (
      <Router>
        <Switch>
            <Route exact path = "/" render = {HomeComponent}/>
            <Route exact path = "/userProfile" render = {UserProfileComponent} />
            <Route exact path = "/Login" render = {LogInComponent}/>
            <Route exact path = "/Debits" render = {DebitComponent}/>
            <Route exact path = "/Credits" render = {CreditComponent}/>


        </Switch>
      </Router>
    );
  }
}
