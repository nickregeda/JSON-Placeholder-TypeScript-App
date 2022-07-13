import {CommentAction, CommentsActionTypes, CommentState} from "../../types/comment";

const initialState: CommentState = {
    isLoading: false,
    error: null,
    comments: []
}

export const commentReducer = (state = initialState, action: CommentAction): CommentState => {
    switch (action.type) {
        case CommentsActionTypes.GET_COMMENTS:
            return {
                ...state,
                isLoading: true
            }
        case CommentsActionTypes.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                isLoading: false
            }
        case CommentsActionTypes.GET_COMMENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}