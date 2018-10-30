import {_getUsers as getUsersApi} from '../utils/_DATA'
import {_saveUser as saveUserApi} from '../utils/_DATA'


export const GET_USERS = 'GET_USERS'
export const SAVE_USER = 'SAVE_USER'

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function saveUser(user) {
    return {
        type: SAVE_USER,
        user
    }
}

export function handleGetUsers() {
    return (dispatch) => {
        return getUsersApi()
            .then((users) => dispatch(getUsers(users)))
    }
}

export function handleAddUser(user) {
    return (dispatch) => {
        return saveUserApi(user)
            .then(() => dispatch(saveUser(user)))
    }
}