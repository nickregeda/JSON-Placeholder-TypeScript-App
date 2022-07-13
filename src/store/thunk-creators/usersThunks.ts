import {User, UsersAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";

//AC
export const setUsers = (payload: User[]): UsersAction => ({type: UserActionTypes.GET_USERS_SUCCESS, payload})
export const setUser = (payload: User): UsersAction => ({type: UserActionTypes.GET_USER_SUCCESS, payload})
export const setError = (payload: string | null): UsersAction => ({type: UserActionTypes.GET_USERS_ERROR, payload})
export const setIsLoading = (): UsersAction => ({type: UserActionTypes.GET_USERS})

//TC
export const getUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            await dispatch(setError(null))
            dispatch(setIsLoading())
            const response = await userAPI.getUsers()
            dispatch(setUsers(response.data))
        } catch (e) {
            dispatch(setError('Users fetching error: ' + e))
        }
    }
}
export const getUser = (id: number) => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            await dispatch(setError(null))
            dispatch(setIsLoading())
            const response = await userAPI.getUser(id)
            dispatch(setUser(response.data))
        } catch (e) {
            dispatch(setError('User fetching error: ' + e))
        }
    }
}