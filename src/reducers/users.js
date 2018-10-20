import { GET_USERS } from '../actions/users'

export default function users(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case GET_USERS:
      newState = {
        ...state,
        ...action.users
      }
      break;
    default:
      newState = state
      break;
  }

  return newState

}