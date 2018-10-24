import React, {Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../App.css';
import {handleSaveQuestionAnswer} from '../actions/questions'

class PollDetail extends Component {

    onAnswerSelected = (e,option) => {
        e.preventDefault()
        console.warn('Option', option, 'was selected from question', this.props.data.id)
        return this.props.dispatch(handleSaveQuestionAnswer(this.props.data.id,option))        
    }

    render(){
        
        return(
            <div>
                <p>Would you rather?</p>
                <p onClick={(e) => this.onAnswerSelected(e, 'optionOne')}>{this.props.data.optionOne.text} Votes: {this.props.data.optionOne.votes.length} - {(this.props.data.optionOne.votes.length/(this.props.data.optionOne.votes.length + this.props.data.optionTwo.votes.length))*100} %</p>
                <p onClick={(e) => this.onAnswerSelected(e, 'optionTwo')}>{this.props.data.optionTwo.text} Votes: {this.props.data.optionTwo.votes.length} - {(this.props.data.optionTwo.votes.length/(this.props.data.optionOne.votes.length + this.props.data.optionTwo.votes.length))*100} %</p>
                <img src={this.props.authorAvatarURL}
                     alt={this.props.authorName}
                     className='avatar'
                />
                <p>Author: {this.props.authorName}</p>
                <p>Date: {new Date(this.props.data.timestamp).toDateString()}</p>
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
        authorName:name
    }
}    

export default withRouter(connect(mapStateToProps)(PollDetail))