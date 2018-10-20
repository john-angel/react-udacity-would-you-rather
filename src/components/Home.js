import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'
import {handleGetQuestions} from '../actions/questions'

import NavBar from './NavBar'
import PollsUnanswered from './PollsUnanswered'
import PollsAnswered from './PollsAnswered'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'

class Home extends Component{

    state = {
        displayUnAnsweredPolls: true
    }

    onUnansweredSelected = (e) => {
        console.log('Unanswered selected')
        this.setState({displayUnAnsweredPolls:true})
    }
    onAnsweredSelected = (e) => {
        console.log('Answered selected')
        this.setState({displayUnAnsweredPolls:false})
    }



    componentDidMount(){
        this.props.dispatch(handleGetQuestions())
    }

    render() {
        return (            
            <Fragment>
                <NavBar onAnsweredSelected={this.onAnsweredSelected} onUnansweredSelected={this.onUnansweredSelected}>
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