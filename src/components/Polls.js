import React, {Component} from 'react'

class Polls extends Component{

    render(){
        return(
            <div>
                <p>{this.props.data.optionOne.text}</p>
                <p>{this.props.data.optionTwo.text}</p>
                <p>{new Date(this.props.data.timestamp).toDateString()}</p>
            </div>
        )
    }
}

export default Polls;