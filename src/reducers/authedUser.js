import {SET_AUTHED_USER, RESET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser (state = '', action) {
  let newState = ''
  switch(action.type) {
    case SET_AUTHED_USER:
      newState = action.id
      break;
    case RESET_AUTHED_USER:
      newState = ''
      break;
    default :
      newState = state
      break;
  }
  return newState
}