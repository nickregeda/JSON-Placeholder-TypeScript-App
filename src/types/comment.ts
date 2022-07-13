export interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export interface CommentState {
    comments: Comment[]
    isLoading: boolean
    error: null | string
}

export enum CommentsActionTypes {
    GET_COMMENTS = 'GET_COMMENTS',
    GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS',
    GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR',
}

interface GetCommentsAction {
    type: CommentsActionTypes.GET_COMMENTS
}

interface GetCommentsSuccessAction {
    type: CommentsActionTypes.GET_COMMENTS_SUCCESS,
    payload: Comment[]
}

interface GetCommentsErrorAction {
    type: CommentsActionTypes.GET_COMMENTS_ERROR,
    payload: string
}

export type CommentAction = GetCommentsAction | GetCommentsSuccessAction | GetCommentsErrorAction