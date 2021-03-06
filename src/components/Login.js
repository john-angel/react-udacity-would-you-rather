import React, { Component } from 'react';
import { connect } from 'react-redux'

import {handleGetUsers} from '../actions/users'
import User from './User'
import logo from '../logo.svg';
import '../App.css';

class Login extends Component{

    componentDidMount(){
        this.props.dispatch(handleGetUsers())
    }

    render(){
       
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Would you rather</h1><h1 className="App-logo">?</h1>
                </header>
                <div className="loginContainer">
                {
                    this.props.users.map(user => (
                        <User key={user.id} avatar={user.avatarURL} name={user.name} id={user.id} />
                    ))
                } 
                </div>               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: typeof state.users === "undefined" ? [] : Object.keys(state.users).map(user => state.users[user])
    }
}

export default connect(mapStateToProps)(Login);



