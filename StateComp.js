import React from 'react'
class StateComp extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name:"Rajath.Amith.Deshpande",
            city:"Banglore-Rural",
        }
        this.fn = this.fn.bind(this)
    }
        fn = () => {
           this.setState({
               name: "Shyamala",
               city: "Banglore"
           })
        }
      
      render() {
          return  <div className="mt-4">
                <h4>{this.state.name}</h4>
                <h4>{this.state.city}</h4>
                
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	               cillum.
                    </p>
                    <p><b>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	               tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	               cillum</b></p>
                <button className="btn btn-outline-dark" onClick={this.fn}>Update</button>
          </div>
      }

}

export default StateComp