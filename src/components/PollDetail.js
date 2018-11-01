import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../App.css';
import {handleSaveQuestionAnswer} from '../actions/questions'

const PollDetail = props => {

    const onAnswerSelected = (e, option) => {
        e.preventDefault()
        return props.dispatch(handleSaveQuestionAnswer(props.data.id, option))
    }

    const getOptionClassName = (option) => {
        const votes = option.votes.filter(vote => vote === props.authedUser)
        return votes.length ? 'optionSelected' : ''
    }

    const getVotesInfo = (option) => {
        const votes = option.votes.length
        const percentage = (props.data.optionOne.votes.length || props.data.optionTwo.votes.length) ?
            (votes / (props.data.optionOne.votes.length + props.data.optionTwo.votes.length)) * 100 :
            0

        return `Votes: ${votes} - (${percentage.toFixed(2)}%)`
    }

    return (
        <div>
            <h4>Would you rather?</h4>
            <p onClick={props.unAnswered ? (e) => onAnswerSelected(e, 'optionOne') : null} className={`pollOption  ${getOptionClassName(props.data.optionOne)}`}>
                {props.data.optionOne.text} {props.unAnswered ? '' : getVotesInfo(props.data.optionOne)}
            </p>
            <p onClick={props.unAnswered ? (e) => onAnswerSelected(e, 'optionTwo') : null} className={`pollOption ${getOptionClassName(props.data.optionTwo)}`}>
                {props.data.optionTwo.text} {props.unAnswered ? '' : getVotesInfo(props.data.optionTwo)}
            </p>
            <img src={props.authorAvatarURL}
                alt={props.authorName}
                className='avatar'
            />
            <p>Author: {props.authorName}</p>
            <p>Created: {new Date(props.data.timestamp).toDateString()}</p>
        </div>
    )
}

function mapStateToProps(state, props) {
    const { id } = props.match.params
    const data = state.questions[id]
    const {avatarURL,name} = state.users[data.author]
    let unAnswered = !(state.questions[id].optionOne.votes.indexOf(state.authedUser) >- 1 || state.questions[id].optionTwo.votes.indexOf(state.authedUser) >- 1)

    return {data,
        authorAvatarURL:avatarURL,
        authorName:name,
        unAnswered:unAnswered,
        authedUser: state.authedUser
    }
}    

export default withRouter(connect(mapStateToProps)(PollDetail))