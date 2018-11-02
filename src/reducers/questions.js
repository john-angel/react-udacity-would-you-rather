import { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  let newState = {}
  switch (action.type) {
    case GET_QUESTIONS:
      newState = {
        ...state,
        ...action.questions
      }
      break;
      case SAVE_QUESTION:
      const { question } = action
      newState = {
        ...state,
        [question.id]:question
      }
      break;  
      case SAVE_QUESTION_ANSWER:
      const {id,option,user} = action
      newState = {
        ...state,
        [id]: {
            ...state[id],
            [option]: {
              ...state[id][option],            
              votes: state[id][option].votes.concat([user])
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