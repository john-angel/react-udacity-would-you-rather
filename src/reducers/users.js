import { GET_USERS, SAVE_USER, SAVE_USER_ANSWER} from '../actions/users'

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

      case SAVE_USER_ANSWER:
      const {id,option,authedUser} = action
      newState = {
        ...state,
        [authedUser]:{
          ...state[authedUser],
          answers:{
            ...state[authedUser].answers,
            [id]:option
          }
        }
      }
      break;

    default:
      newState = state
      break;
  }

  return newState

}