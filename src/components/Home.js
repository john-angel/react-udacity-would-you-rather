import React, { Component,Fragment} from 'react';
import { connect } from 'react-redux'

import PollsUnanswered from './PollsUnanswered'
import PollsAnswered from './PollsAnswered'
import NewPoll from './NewPoll'

class Home extends Component{

    state = {
        displayUnAnsweredPolls: true
    }
    
    render() {
        return (            
            <Fragment>
                
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