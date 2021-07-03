import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../App.css';


export default class Credits extends Component {
    constructor(props){
        super(props)

        this.state = {
            credit:{
                id: '',
                description:'',
                amount:'',
                date: '',
            }
        }
    }
    handleChange = (e) =>{
        const updatedCredit = {...this.state.credit}
        const inputField = e.target.name
        const inputValue = e.target.value
        if(inputField === "amount")
            updatedCredit[inputField] = parseInt(inputValue)
        else
        updatedCredit["id"] = uuidv4();
        updatedCredit["date"] = Date().toLocaleString()

        console.log(this.state.credit)

        this.setState({credit: updatedCredit})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        this.props.creditSubmission(this.state.credit)
        this.props.calculate()

        this.forceUpdate()
    }


    render() {
        return (
            <div>
                <ul>
                    {this.props.credits.map((cred) => {
                        return(
                        <li key = {cred.id}> NAME: {cred.description} COST: {cred.amount} DATE: {cred.date} </li>
                        )
                    })}
                </ul>
                <form onSubmit = {this.handleSubmit}>
                    <input onChange = {this.handleChange} name = "description" type = "text" placeholder = "Description"></input>
                    <input onChange = {this.handleChange} name = "amount" type = "text" placeholder = "Cost"></input>
                    <button type = "submit">Add Credit</button>
                </form>
                <span>Account Balance: {this.props.accountBalance} </span>
                <Link to = "/"> Home </Link>
            </div>
        )
    }
}
