import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {handleGetQuestions} from '../actions/questions'
import {resetAuthedUser} from '../actions/authedUser' 

import Login from './Login'
import Home from './Home'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'
import NewPoll from './NewPoll'
import PollDetail from './PollDetail'
import PageNotFound from './PageNotFound';

class App extends Component {

  state = {
    displayUnAnsweredPolls: true,
    pollAdded:false
  }

  onUnansweredSelected = () => (this.setState({displayUnAnsweredPolls:true,pollAdded:false}))  

  onAnsweredSelected = () => (this.setState({displayUnAnsweredPolls:false,pollAdded:false}))

  onLeaderboardSelected = () => this.setState({pollAdded:false})

  onPollAdded = () => this.setState({displayUnAnsweredPolls:true,pollAdded:true})
  
  onLogOutSelected =() => {
    this.setState({displayUnAnsweredPolls:true})
    this.props.dispatch(resetAuthedUser())
    sessionStorage.removeItem('authedUser');
  }      

  componentDidMount() {
    this.props.dispatch(handleGetQuestions())

  }
  
  render() {
    return (
      <Router>          
          {
            this.props.authedUser !== '' ? (
              <Fragment>
                <NavBar onUnansweredSelected={this.onUnansweredSelected} onAnsweredSelected={this.onAnsweredSelected}
                onLeaderboardSelected={this.onLeaderboardSelected} onLogOutSelected={this.onLogOutSelected} pollAdded={this.state.pollAdded}/>
                <Switch>
                  <Route path='/home' render={() => <Home displayUnAnsweredPolls={this.state.displayUnAnsweredPolls} />}/>
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={PollDetail} />
                  <Route path='/add' render={() => <NewPoll onPollAdded={this.onPollAdded}/>} />
                </Switch>
              </Fragment>)            
              :
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route component={PageNotFound} />
                </Switch>
          }
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {authedUser : state.authedUser}
}

export default connect(mapStateToProps)(App);