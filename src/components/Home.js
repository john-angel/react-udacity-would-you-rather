import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'

import {handleGetQuestions} from '../actions/questions'
import {resetAuthedUser} from '../actions/authedUser' 

import NavBar from './NavBar'
import PollsUnanswered from './PollsUnanswered'
import PollsAnswered from './PollsAnswered'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'

class Home extends Component{

    state = {
        displayUnAnsweredPolls: true
    }

    onUnansweredSelected = () => {
        console.log('Unanswered selected')
        this.setState({displayUnAnsweredPolls:true})
    }
    onAnsweredSelected = () => {
        console.log('Answered selected')
        this.setState({displayUnAnsweredPolls:false})
    }

    onLogOutSelected =() => {
        console.log('Reset authedUser')
        this.props.dispatch(resetAuthedUser())
    }

    componentDidMount(){
        this.props.dispatch(handleGetQuestions())
    }

    render() {
        return (            
            <Fragment>
                <NavBar onAnsweredSelected={this.onAnsweredSelected} onUnansweredSelected={this.onUnansweredSelected}
                    onLogOutSelected={this.onLogOutSelected}
                >
                </NavBar>
                {
                    this.state.displayUnAnsweredPolls ? <PollsUnanswered />  : <PollsAnswered /> 
                }                             
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(Home)