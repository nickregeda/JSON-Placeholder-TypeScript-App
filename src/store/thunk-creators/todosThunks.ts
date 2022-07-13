import {Todo, TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";
import {todoAPI} from "../../api/api";

//AC
export const setTodosPage = (payload: number): TodoAction => ({type: TodoActionTypes.SET_TODOS_PAGE, payload})
export const setTodosSuccess = (payload: Todo[]): TodoAction => ({type: TodoActionTypes.GET_TODOS_SUCCESS, payload})
export const setTodosError = (payload: string): TodoAction => ({type: TodoActionTypes.GET_TODOS_ERROR, payload})
export const setIsLoading = (): TodoAction => ({type: TodoActionTypes.GET_TODOS})

//TC
export const getTodos = (userId: number, page: number, limit: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch(setIsLoading())
            const response = await todoAPI.getTodos(userId, page, limit)
            dispatch(setTodosSuccess(response.data))
        } catch (e) {
            dispatch(setTodosError('Todos fetching error: ' + e))
        }
    }
}