import React, { Component } from 'react'


export default class Debits extends Component {
    constructor(props){
        super(props)
        this.state = {
            credits:[],
            isLoaded: false
        }
    }
    
    componentDidMount = async () => {
        await fetch("https://moj-api.herokuapp.com/debits")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                credits: json,
                isLoaded: true
            })

            console.log(this.state.credits)
        })
    

        .catch((err) => {
            console.log(err)
            return 0
        })
    }
    render() {
        if(!this.state.isLoaded){
            return(
                <div>Is Loading...</div>
            )
        }
        return (
            <div>
                <ul>
                    {this.state.credits.map((cred) => {
                        return <li key = {cred.id}> 
                                Item Name: {cred.description} COST: {cred.amount} DATE: {cred.date}
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}
