import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

class App extends Component {
  
  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={Login} />
          <Route path='/home' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

export default App;