import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'

class PageNotFound extends Component{

    componentDidMount(){
        console.log('Page requested', this.props.location.pathname)
        window.sessionStorage.setItem('urlRequested',this.props.location.pathname)

        setTimeout(() => this.props.history.push({
            pathname:'/',
        })
        ,3000)
       
    }

    render(){
        return(
            <Fragment>
                <h3>You have to login before going to {this.props.location.pathname}.</h3>
                <h3>Redirecting you to login page...</h3>
            </Fragment>
        )
    }
}

export default withRouter(PageNotFound);