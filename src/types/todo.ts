export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export interface TodoState {
    todos: Todo[]
    isLoading: boolean
    error: string | null
    page: number
    limit: number
}

export enum TodoActionTypes {
    GET_TODOS = 'GET_TODOS',
    GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS',
    GET_TODOS_ERROR = 'GET_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

interface GetTodoAction {
    type: TodoActionTypes.GET_TODOS
}

interface GetTodoSuccessAction {
    type: TodoActionTypes.GET_TODOS_SUCCESS
    payload: Todo[]
}

interface GetTodoErrorAction {
    type: TodoActionTypes.GET_TODOS_ERROR
    payload: string
}

interface SetTodosPage {
    type: TodoActionTypes.SET_TODOS_PAGE
    payload: number
}

export type TodoAction = GetTodoAction | GetTodoErrorAction | GetTodoSuccessAction | SetTodosPage