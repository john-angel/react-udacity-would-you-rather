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
import RedirectPage from './RedirectPage';
import PageNotFound from './PageNotFound';
import NewUser from './NewUser'

class App extends Component {

  state = { displayUnAnsweredPolls: true  }

  onUnanswered = () => this.setState({displayUnAnsweredPolls:true}) 

  onAnswered = () => this.setState({displayUnAnsweredPolls:false})

  onPollAdded = () => this.setState({displayUnAnsweredPolls:true})  
  
  onLogOut =() => {
    this.setState({ displayUnAnsweredPolls:true })
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
                <NavBar onUnanswered={this.onUnanswered} onAnswered={this.onAnswered} displayUnAnsweredPolls={this.state.displayUnAnsweredPolls} 
                  onLogOut={this.onLogOut}/>
                <Switch>
                  <Route path='/home' render={() => <Home displayUnAnsweredPolls={this.state.displayUnAnsweredPolls} onRedirect={this.onRedirect} />}/>
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/questions/:id' component={PollDetail} />
                  <Route path='/add' render={() => <NewPoll onPollAdded={this.onPollAdded}/>} />
                  <Route path='/adduser' component={NewUser} />
                </Switch>
              </Fragment>)            
              :
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/pagenotfound' component={PageNotFound} />
                  <Route component={RedirectPage} />

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