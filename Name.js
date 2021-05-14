import React, { Component } from 'react'
import myStore from '../ReduxStore/Store'

export default class Name extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             name:''
        }
    }

    sendData = () => {
        myStore.dispatch({
            type:'NAME',
            payload:this.state.name
        })
    }
    
    render() {
        return (
            <div className="container mt-3">
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})} }/>
                    <button className="btn btn-outline-dark" onClick={this.sendData}>Click me to store data</button>
                </div>
            </div>
        )
    }
}
