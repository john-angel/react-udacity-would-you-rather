import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import {handleGetQuestions} from '../actions/questions'
import {resetAuthedUser} from '../actions/authedUser' 

import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'
import PollDetail from './PollDetail'

class App extends Component {

  state = {
    displayUnAnsweredPolls: true
  }

  onUnansweredSelected = () => (this.setState({displayUnAnsweredPolls:true}))  

  onAnsweredSelected = () => (this.setState({displayUnAnsweredPolls:false}))

  onLogOutSelected =() => {
    this.setState({displayUnAnsweredPolls:true})
    this.props.dispatch(resetAuthedUser())
  }      

  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
  }
  //{...props}
  
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
          <Route path='/home' render={() => (
            this.props.authedUser !== '' ?  <Home displayUnAnsweredPolls={this.state.displayUnAnsweredPolls} /> :
            <Redirect to='/'></Redirect>
          )} />
        
          <Route path='/leaderboard' render={() => (
            this.props.authedUser !== '' ?  <Leaderboard/> :
            <Redirect to='/'></Redirect>
          )} />
          <Route path='/questions/:id' render={() => (
            this.props.authedUser !== '' ?  <PollDetail/> :
            <Redirect to='/'></Redirect>
          )} />
          <Route path='/add' render={() => (
            this.props.authedUser !== '' ?  <NewPoll/> :
            <Redirect to='/'></Redirect>
          )} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {authedUser : state.authedUser}
}

export default connect(mapStateToProps)(App);