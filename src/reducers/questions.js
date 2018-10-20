import { GET_QUESTIONS, SAVE_QUESTION } from '../actions/questions'

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
    default:
      newState = state
      break;
  }

  return newState

}