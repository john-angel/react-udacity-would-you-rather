import React,{Component} from 'react'
import {connect} from 'react-redux'
import { handleSaveQuestion } from '../actions/questions';

class NewPoll extends Component{

    componentDidMount(){
        const {dispatch, author} = this.props
        const question = {}
        question.author = author
        question.optionOneText = 'Option One test poll'
        question.optionTwoText = 'Option Two test poll'

        dispatch(handleSaveQuestion(question))


    }

    render(){
        return(
            <p>hola</p>
        )
    }
}

const mapStateToProps = state => {
    return {author:state.authedUser}
}

export default connect(mapStateToProps)(NewPoll);