import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combineReducers from './reducers'
import middleware from './middleware'
import App from './components/App'

const store = createStore(combineReducers,middleware)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
  )