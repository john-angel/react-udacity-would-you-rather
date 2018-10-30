import { GET_USERS, SAVE_USER} from '../actions/users'

export default function users(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case GET_USERS:
      newState = {
        ...state,
        ...action.users
      }
      break;
      case SAVE_USER:
      const { user } = action
      newState = {
        ...state,
        [user.id]:user
      }  
      break;

    default:
      newState = state
      break;
  }

  return newState

}