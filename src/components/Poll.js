import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'

class Poll extends Component{

    onPollSelected = (e,id) => {
        e.preventDefault()
        this.props.history.push({
            pathname:`/questions/${id}`,
            state:{unAnswered:this.props.unAnswered}           
        })
    }

    render(){
        return(
            <div>
                <Link to={`/questions/${this.props.data.id}`} className='question' onClick={(e) => this.onPollSelected(e, this.props.data.id)}>
                    {this.props.data.optionOne.text} or {this.props.data.optionTwo.text}
                </Link>
            </div>
        )
    }
}

export default withRouter(Poll);