import React, {Component} from 'react'
import {connect} from 'react-redux'
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
                <Link to={`/questions/${this.props.id}`} className='question' onClick={(e) => this.onPollSelected(e, this.props.id)}>
                    {this.props.data.optionOne.text} or {this.props.data.optionTwo.text}
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { id } = props.data   
    return {
        id,
        unAnswered: props.unAnswered}
}

export default withRouter(connect(mapStateToProps)(Poll));