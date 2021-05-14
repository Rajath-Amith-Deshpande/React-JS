import React, { Component } from 'react'
import { connect } from 'react-redux'

class Email extends Component {
constructor(props) {
    super(props)

    this.state = {
         email:''
    }
}
    sendData = () => {
        this.props.dispatch({
            type:'EMAIL',
            payload:this.state.email
        })
    }

    render() {
        return (
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Email" onChange={(e)=>{this.setState({email:e.target.value})}} />
                <br />
                <button className="btn btn-outline-dark">Click me to store data</button>
            </div>
        )
    }
}

export default connect(null,(dispatch)=>{
    return {
        dispatch
    }
})(Email)