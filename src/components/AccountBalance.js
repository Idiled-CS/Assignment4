import React, { Component } from 'react';
import '../App.css';

export default class AccountBalance extends Component {
    render() {
        return (
            <div>
                Balance: {this.props.accountBalance}
            </div>
        );
    }
}
