import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'

import Poll from './Poll'

class Home extends Component{

    render() {
        return (

            <Fragment>
            {
                this.props.polls.map(poll => (<Poll key={poll.id} data={poll} unAnswered={this.props.unAnswered}/>))
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

    return { 
        polls:questions,
        unAnswered:ownProps.displayUnAnsweredPolls }
    
}

export default connect(mapStateToProps)(Home)