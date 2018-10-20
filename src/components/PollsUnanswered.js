import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'

class PollsUnanswered extends Component{

    onAnswerSelected(e,option){
        console.warn('Option ',option, 'selected')
    }
    render() {
        return (            
            <Fragment>
                {
                    this.props.polls.map(poll => <Poll key={poll.id} data={poll}></Poll>)
                }
            </Fragment>            
        )
    }
}

const mapStateToProps = state =>{

    const answers = state.users[state.authedUser].answers
    const questionsIds = Object.keys(state.questions).filter(question => typeof answers[question] === 'undefined' )
    
    const questions = questionsIds.map(question => {
      const item = state.questions[question];      
      const authorId = item.author
      item.authorAvatarURL = state.users[authorId].avatarURL;
      item.authorName = state.users[authorId].name;
      return item;
    })
    
    questions.sort((a,b) => (b.timestamp - a.timestamp))

    return {polls:questions}
}

export default connect(mapStateToProps)(PollsUnanswered);