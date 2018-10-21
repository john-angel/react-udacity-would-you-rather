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

  state = {
    displayUnAnsweredPolls: true
  }

  onUnansweredSelected = () => (this.setState({displayUnAnsweredPolls:true}))  

  onAnsweredSelected = () => (this.setState({displayUnAnsweredPolls:false}))

  onLogOutSelected =() => (this.props.dispatch(resetAuthedUser()))      

  componentDidMount() {
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
          <Route path='/home' render={(props) => <Home {...props} displayUnAnsweredPolls={this.state.displayUnAnsweredPolls} />} />
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