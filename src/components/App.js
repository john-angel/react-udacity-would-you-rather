import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {handleGetQuestions} from '../actions/questions'
import {resetAuthedUser} from '../actions/authedUser' 

import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'

class App extends Component {

  onUnansweredSelected = () => {
    console.log('Unanswered selected')
    this.setState({displayUnAnsweredPolls:true})
  }
  onAnsweredSelected = () => {
      console.log('Answered selected')
      this.setState({displayUnAnsweredPolls:false})
  }

  onLogOutSelected =() => {
      console.log('Reset authedUser')
      this.props.dispatch(resetAuthedUser())
  }

componentDidMount(){
    this.props.dispatch(handleGetQuestions())
}
  
  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={Login} />
          {
            this.props.authedUser !== '' ?
              <NavBar onUnansweredSelected={this.onUnansweredSelected} onAnsweredSelected={this.onAnsweredSelected}
              onLogOutSelected={this.onLogOutSelected}
              >
              </NavBar>
              :
              null
          }
                
          <Route path='/home' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {authedUser : state.authedUser}
}

export default connect(mapStateToProps)(App);