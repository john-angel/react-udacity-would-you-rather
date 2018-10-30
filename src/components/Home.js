import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

import Poll from './Poll'

class Home extends Component{

    componentDidMount(){
        const url = window.sessionStorage.getItem('urlRequested')
        
        if(url != null){
            window.sessionStorage.removeItem('urlRequested')
            console.log('Redirecting to', url)
            this.props.history.push({ pathname: url })
            this.props.onRedirect(url)
        }
    }
    
    render() {
        return (

            <Fragment>
            {
                <ul>
                {
                    this.props.polls.map(poll => 
                        <li key={poll.id}>
                            <Poll key={poll.id} data={poll} unAnswered={this.props.unAnswered}/>
                        </li>
                    )
                }
                </ul>
                
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

export default withRouter(connect(mapStateToProps)(Home));