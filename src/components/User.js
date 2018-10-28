import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import '../App.css';
import {setAuthedUser} from '../actions/authedUser'


class User extends Component{
    
    onUserSelected = (e, userId) =>{
        console.log('User', userId, ' logged in')
        this.props.dispatch(setAuthedUser(userId))
        window.sessionStorage.setItem('authedUser',userId)

    }

   
    render(){
        return (
            <li onClick={(e) => this.onUserSelected(e, this.props.id)}>
                <Link to="/home">
                    <img
                        src={this.props.avatar}
                        alt={this.props.name}
                        className='avatar'
                    />
                    <p>{this.props.name}</p>
                </Link>
                </li>            
        )

    }
    
}

const mapStateToProps = (state, ownProps) => {    
   
    return {
        avatar:ownProps.avatar,
        name:ownProps.name,
        id:ownProps.id
    }
}

export default connect(mapStateToProps)(User);
