import {UsersAction, UserActionTypes, UserState, User} from "../../types/user";

const initialState: UserState = {
    users: [],
    user: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = initialState, action: UsersAction): UserState => {
    switch (action.type) {
        case UserActionTypes.GET_USERS:
            return {
                ...state,
                isLoading: true
            }
        case UserActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case UserActionTypes.GET_USERS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: true
            }
        case UserActionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}