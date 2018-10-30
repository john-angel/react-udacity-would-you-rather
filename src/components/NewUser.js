import React,{Component} from 'react'
import { handleAddUser } from '../actions/users';
import {connect} from 'react-redux'

class NewUser extends Component{

    state = {header:'New user!'}

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch} = this.props 
        let id = this.name.value.replace(/\s/g, "")

        let user = {}
        
        user.id = id.toLowerCase()
        user.name = this.name.value
        user.avatarURL = this.avatarURL.value
        user.answers = {}
        user.questions = []

        dispatch(handleAddUser(user))
        this.setState({header:`User ${user.name} created!`})    
    }
    
    render(){
        return(
            <form className='newUser' onSubmit={this.handleSubmit}>
                <h1>{this.state.header}</h1>
                <input placeholder="Name..." ref={(input) => this.name = input}/>
                <input placeholder="Avatar URL..." ref={(input) => this.avatarURL = input}/>                
                <button
                    className='btn'
                    type='submit'>
                    Add
                </button>
            </form> 


        )
    }
}

export default connect()(NewUser)