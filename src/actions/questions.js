import {_getQuestions as getQuestionsApi} from '../utils/_DATA'
import {_saveQuestion as saveQuestionApi} from '../utils/_DATA'
import {_saveQuestionAnswer as saveQuestionAnswerApi} from '../utils/_DATA'
import {saveUserAnswer} from './users'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export function handleGetQuestions() {
    return (dispatch) => {
        return getQuestionsApi()
            .then((questions) => dispatch(getQuestions(questions)))
    }
}

export function saveQuestion(question){
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return saveQuestionApi(question)
            .then((formattedQuestion) => dispatch(saveQuestion(formattedQuestion)))
    }
}

export function saveQuestionAnswer(id,option,user){
    return {
        type: SAVE_QUESTION_ANSWER,
        id,
        option,
        user
    }
}

export function handleSaveQuestionAnswer(qid, answer){
    return (dispatch, getState) => {
        const {authedUser} = getState()
        return saveQuestionAnswerApi({ authedUser, qid, answer })
        .then(() => dispatch(saveQuestionAnswer(qid,answer,authedUser)))
        .then(() => dispatch(saveUserAnswer(qid,answer,authedUser)))
    }
}