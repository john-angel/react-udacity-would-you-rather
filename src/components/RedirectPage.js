import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'

class RedirectPage extends Component{

    componentDidMount(){
        console.log('Page requested', this.props.location.pathname)
        window.sessionStorage.setItem('urlRequested',this.props.location.pathname)
   
        switch(this.props.location.pathname){
            case '/home':
            case '/leaderboard':
            case '/add':
            case '/adduser':
                setTimeout(() => this.props.history.push({pathname: '/'}), 3000)
            break;           
            default:
                this.props.history.push({pathname: '/pagenotfound'})            
            break;
        }       
       
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

export default withRouter(RedirectPage);