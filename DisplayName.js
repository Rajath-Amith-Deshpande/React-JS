import React, { Component } from 'react'
import {connect} from 'react-redux'

class DisplayName extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="container">
                <h4>{this.props.name}</h4>
                <h4>{this.props.email}</h4>
            </div>
        )
    }
}
export default connect((storeState)=>{
    return {
        name:storeState.myReducer.name ,
        email:storeState.myReducer.email
    }
},null)(DisplayName);