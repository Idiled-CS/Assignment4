import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import bankPicture from '../Pictures/bank.png';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img id = "bankPic" src = {bankPicture} alt = "bank" />
                <h1> Bank Of React </h1>

                <Link to = "/userProfile"> User Profile </Link>
                <Link to = "/debits"> Debits </Link>
                <Link to = "/credits"> Credits </Link>

                <AccountBalance className = "Bal" accountBalance = {this.props.accountBalance}/>
            </div>
        );
    }
}
