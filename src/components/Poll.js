import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../App.css';
import {handleSaveQuestionAnswer} from '../actions/questions'

class Poll extends Component {

    onAnswerSelected = (e,option) => {
        console.warn('Option', option, 'from question', this.props.data.id)
        return this.props.dispatch(handleSaveQuestionAnswer(this.props.data.id,option))        
    }

    render(){
        return(
            <div>
                <p>Would you rather?</p>
                <p onClick={(e) => this.onAnswerSelected(e, 'optionOne')}>{this.props.data.optionOne.text} Votes: {this.props.data.optionOne.votes.length} - {(this.props.data.optionOne.votes.length/(this.props.data.optionOne.votes.length + this.props.data.optionTwo.votes.length))*100} %</p>
                <p onClick={(e) => this.onAnswerSelected(e, 'optionTwo')}>{this.props.data.optionTwo.text} Votes: {this.props.data.optionTwo.votes.length} - {(this.props.data.optionTwo.votes.length/(this.props.data.optionOne.votes.length + this.props.data.optionTwo.votes.length))*100} %</p>
                <img src={this.props.data.authorAvatarURL}
                     alt={this.props.data.authorName}
                     className='avatar'
                />
                <p>Author: {this.props.data.authorName}</p>
                <p>Date: {new Date(this.props.data.timestamp).toDateString()}</p>
            </div>
        )
    }
    
}

export default connect()(Poll)