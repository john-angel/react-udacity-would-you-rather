import {_getUsers as getUsersApi} from '../utils/_DATA'

export const GET_USERS = 'GET_USERS'

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}

export function handleGetUsers() {
    return (dispatch) => {
        return getUsersApi()
            .then((users) => dispatch(getUsers(users)))
    }
}
