import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'
import {handleGetQuestions} from '../actions/questions'

import NavBar from './NavBar'
import PollsUnanswered from './PollsUnanswered'
import PollsAnswered from './PollsAnswered'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(handleGetQuestions())
    }

    render() {
        return (            
            <Fragment>
                <NavBar>
                </NavBar>
                <PollsUnanswered />               
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