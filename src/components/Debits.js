import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../App.css';

export default class Debits extends Component {
    constructor(props){
        super(props)

        this.state = {
            debit:{
                id: '',
                description:'',
                amount:'',
                date: '',
            }
        }
    }
    handleChange = (e) =>{
        const updatedDebit = {...this.state.debit}
        const inputField = e.target.name
        const inputValue = e.target.value
        if(inputField === "amount")
            updatedDebit[inputField] = parseInt(inputValue)
        else
        updatedDebit[inputField] = inputValue
        updatedDebit["id"] = uuidv4();
        updatedDebit["date"] = Date().toLocaleString()

        console.log(this.state.debit)

        this.setState({debit: updatedDebit})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        this.props.debitSubmission(this.state.debit)
        this.props.calculate()

        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.debits.map((deb) => {
                        return(
                        <li key = {deb.id}> NAME: {deb.description} COST: {deb.amount} DATE: {deb.date} </li>
                        )
                    })}
                </ul>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} name = "description" type = "text" placeholder = "Description"></input>
                    <input onChange = {this.handleChange} name = "amount" type = "text" placeholder = "Cost"></input>
                    <button type = "submit">Add Debit</button>
                </form>
                <span>Account Balance: {this.props.accountBalance} </span>
                <Link to = "/"> Home </Link>
            </div>
        )
    }
}
