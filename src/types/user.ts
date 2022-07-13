export interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        city: string
    }
}

export interface UserState {
    users: User[],
    user: User | null,
    isLoading: boolean,
    error: null | string
}

export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_ERROR',

    // GET_USER = 'GET_USER',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    // GET_USER_ERROR = 'GET_USER_ERROR',
}

//////////////////////////
interface GetUsersAction {
    type: UserActionTypes.GET_USERS
}

interface GetUsersSuccessAction {
    type: UserActionTypes.GET_USERS_SUCCESS
    payload: User[]
}

interface GetUsersErrorAction {
    type: UserActionTypes.GET_USERS_ERROR
    payload: string | null
}

//////////////////////////
// interface GetUserAction {
//     type: UserActionTypes.GET_USER
// }

interface GetUserSuccessAction {
    type: UserActionTypes.GET_USER_SUCCESS
    payload: User
}

// interface GetUserErrorAction {
//     type: UserActionTypes.GET_USER_ERROR
//     payload: string
// }

export type UsersAction =
    GetUsersAction
    | GetUsersSuccessAction
    | GetUsersErrorAction
    // | GetUserAction
    | GetUserSuccessAction
// | GetUserErrorAction