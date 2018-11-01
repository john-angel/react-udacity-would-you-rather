import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import { handleSaveQuestion } from '../actions/questions';
import '../App.css'

class NewPoll extends Component{

    state = {disableButton:true}

    handleChange = (e) => {       

        this.setState(() => ({disableButton: this.option1.value.length && this.option2.value.length ? false : true }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch, author} = this.props
        const question = {}
        question.author = author
        question.optionOneText = this.option1.value
        question.optionTwoText = this.option2.value

        dispatch(handleSaveQuestion(question))
        this.props.history.push({pathname:'/home'})
        this.props.onPollAdded()
    }
    render(){
        return(
            <form className='newPoll' onSubmit={this.handleSubmit}>
                <h1>Would you rather?</h1>
                <input placeholder="Option 1..." ref={(input) => this.option1 = input} onChange={this.handleChange}/>
                <input placeholder="Option 2..." ref={(input) => this.option2 = input} onChange={this.handleChange}/>                
                <button
                    className='btn'
                    type='submit'
                    disabled={this.state.disableButton}>
                    Add
                </button>
            </form> 
        )
    }
}

const mapStateToProps = state => {
    return {
        author:state.authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(NewPoll));