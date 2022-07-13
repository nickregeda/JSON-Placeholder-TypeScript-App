import {TodoAction, TodoActionTypes, TodoState, Todo} from "../../types/todo";
import {Dispatch} from "redux";
import {todoAPI} from "../../api/api";

const initialState: TodoState = {
    todos: [],
    error: null,
    isLoading: false,
    page: 1,
    limit: 5,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.GET_TODOS:
            return {
                ...state,
                isLoading: true
            }
        case TodoActionTypes.GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TodoActionTypes.GET_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case TodoActionTypes.SET_TODOS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}