import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>

                <Link to = "/"> Return Home </Link>
            </div>
        )
    }
}
