import React,{Component} from 'react'
import {connect} from 'react-redux'
import { handleSaveQuestion } from '../actions/questions';
import '../App.css'

class NewPoll extends Component{

    handleSubmit = (e) => {
        e.preventDefault()

        console.group('Poll data')
        console.log('Option 1: ', this.option1.value)
        console.log('Option 2: ', this.option2.value)
        console.groupEnd()

        const {dispatch, author} = this.props
        const question = {}
        question.author = author
        question.optionOneText = this.option1.value
        question.optionTwoText = this.option2.value

        dispatch(handleSaveQuestion(question))
       
    }
    render(){
        return(
            <form className='newPoll' onSubmit={this.handleSubmit}>
                <h1>Would you rather?</h1>
                <input placeholder="Option 1..." ref={(input) => this.option1 = input}/>
                <input placeholder="Option 2..." ref={(input) => this.option2 = input}/>                
                <button
                    className='btn'
                    type='submit'>
                    Add
                </button>
            </form> 
        )
    }
}

const mapStateToProps = state => {
    return {author:state.authedUser}
}

export default connect(mapStateToProps)(NewPoll);