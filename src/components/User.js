import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import '../App.css';
import {setAuthedUser} from '../actions/authedUser'


class User extends Component{

    constructor(props){
        super(props);
        const url = window.sessionStorage.getItem('urlRequested')
        this.state = {route: (url != null) && (url.indexOf('/questions/') !== -1) ? '/pagenotfound' : '/home'};
    }
 
    onUserSelected = (e, userId) => {
       
        if(this.state.route === '/home')
        {
            console.log('User', userId, ' logged in')
            this.props.dispatch(setAuthedUser(userId))
            window.sessionStorage.setItem('authedUser',userId)
        }       
    }

   
    render(){
        return (
            <div className='userLogin' onClick={(e) => this.onUserSelected(e, this.props.id)}>
                <Link to={this.state.route}>
                    <img
                        src={this.props.avatar}
                        alt={this.props.name}
                        className='avatar'
                    />
                    <p>{this.props.name}</p>
                </Link>                
            </div>            
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
