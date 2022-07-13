import {Post, PostActionTypes, PostsAction, PostState} from "../../types/post";

const initialState: PostState = {
    posts: [],
    post: null,
    error: null,
    isLoading: false,
    limit: 5,
    page: 1
}

export const postReducer = (state = initialState, action: PostsAction): PostState => {
    switch (action.type) {
        case PostActionTypes.GET_POSTS:
            return {
                ...state,
                isLoading: true
            }
        case PostActionTypes.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        case PostActionTypes.GET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                isLoading: false
            }
        case PostActionTypes.GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case PostActionTypes.SET_POSTS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}