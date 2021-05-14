import React, { Component } from 'react'
import ctx from './Create Context'

export default class ChildComp extends Component {
    render() {
        return (
            <div className="container mt-5">
                <ctx.consumer>
                    {
                        (data)=> {
                            return data.lenght > 0&& <table className="table table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                                {
                                    data.map((userData,index)=>{
                                        return <tr>
                                            <td>{userData.id}</td>
                                            <td>{userData.name}</td>
                                            <td>{userData.email}</td>
                                        </tr>
                                    })
                                }
                            </table>
                        }
                    }
                </ctx.consumer>
            </div>
        )
    }
}