import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../App.css';
import {handleSaveQuestionAnswer} from '../actions/questions'

class PollDetail extends Component {

    onAnswerSelected = (e,option) => {
        e.preventDefault()
        return this.props.dispatch(handleSaveQuestionAnswer(this.props.data.id,option))        
    }

    getOptionClassName = (option) => {
        const votes = option.votes.filter(vote => vote === this.props.authedUser)
        return votes.length ? 'optionSelected' : ''
    }

    getVotesInfo = (option) => {
        const votes = option.votes.length
        const percentage = (this.props.data.optionOne.votes.length || this.props.data.optionTwo.votes.length) ?
        (votes/(this.props.data.optionOne.votes.length + this.props.data.optionTwo.votes.length)) * 100 :
        0

        return `Votes: ${votes} - (${percentage.toFixed(2)}%)`
    }

    render(){

        return(
            <div>
                <h4>Would you rather?</h4>
                <p onClick={this.props.unAnswered ? (e) => this.onAnswerSelected(e, 'optionOne'):null} className={`pollOption  ${this.getOptionClassName(this.props.data.optionOne)}`}>
                    {this.props.data.optionOne.text} {this.props.unAnswered ? '': this.getVotesInfo(this.props.data.optionOne)}           
                </p>
                <p onClick={this.props.unAnswered ? (e) => this.onAnswerSelected(e, 'optionTwo'):null} className={`pollOption ${this.getOptionClassName(this.props.data.optionTwo)}`}>                
                        {this.props.data.optionTwo.text} {this.props.unAnswered ? '': this.getVotesInfo(this.props.data.optionTwo)}                  
                </p>
                <img src={this.props.authorAvatarURL}
                     alt={this.props.authorName}
                     className='avatar'
                />
                <p>Author: {this.props.authorName}</p>
                <p>Created: {new Date(this.props.data.timestamp).toDateString()}</p>
            </div>
        )
    }
    
}

function mapStateToProps(state, props) {
    const { id } = props.match.params
    const data = state.questions[id]
    const {avatarURL,name} = state.users[data.author]

    return {data,
        authorAvatarURL:avatarURL,
        authorName:name,
        unAnswered:props.history.location.state.unAnswered,
        authedUser: state.authedUser
    }
}    

export default withRouter(connect(mapStateToProps)(PollDetail))