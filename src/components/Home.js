import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'

import Polls from './Polls'

class Home extends Component{

    render() {
        return (

            <Fragment>
            {
                this.props.polls.map(poll => (<Polls key={poll.id} data={poll}/>))
            }                
            </Fragment>
        )
    }
}

const mapStateToProps = (state,ownProps) => {

    const answers = state.users[state.authedUser].answers
    
    const questionsIds = Object.keys(state.questions).filter(
        question => ownProps.displayUnAnsweredPolls ? typeof answers[question] === 'undefined' 
        : typeof answers[question] !== 'undefined'
    )

    const questions = questionsIds.map(question => (state.questions[question]))
    
    questions.sort((a,b) => (b.timestamp - a.timestamp))

    return { polls:questions }
    
}

export default connect(mapStateToProps)(Home)