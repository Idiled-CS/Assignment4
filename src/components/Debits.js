import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Debits extends Component {
    constructor(props){
        super(props)
    }

    render() {
        if(!this.props.debitIsLoaded){
            return(
                <div>Is Loading...</div>
            )
        }
        return (
            <div>
                <ul>
                    {this.props.debits.map((deb) => {
                        return(
                        <li key = {deb.id}> NAME: {deb.description} COST: {deb.amount} DATE: {deb.date} </li>
                        )
                    })}
                </ul>
                <Link to = "/"> Home </Link>
            </div>
        )
    }
}
