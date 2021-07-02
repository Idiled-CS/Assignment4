import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import bankPicture from '../Pictures/bank.png';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
                <img src = {bankPicture} alt = "bank" />
                <h1> Bank Of React </h1>

                <Link to = "/userProfile"> User Profile </Link>

                <AccountBalance accountBalance = {this.props.accountBalance}/>
            </div>
        );
    }
}
