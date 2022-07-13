import {Post, PostActionTypes, PostsAction} from "../../types/post";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";

//AC
export const setPostsPage = (payload: number): PostsAction => ({type: PostActionTypes.SET_POSTS_PAGE, payload})
export const setPostsSuccess = (payload: Post[]): PostsAction => ({type: PostActionTypes.GET_POSTS_SUCCESS, payload})
export const setPostSuccess = (payload: Post): PostsAction => ({type: PostActionTypes.GET_POST_SUCCESS, payload})
export const setPostsError = (payload: string | null): PostsAction => ({type: PostActionTypes.GET_POSTS_ERROR, payload})
export const setIsLoading = (): PostsAction => ({type: PostActionTypes.GET_POSTS})

//TC
export const getPosts = (userId: number, page: number, limit: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch(setPostsError(null))
            dispatch(setIsLoading())
            const response = await userAPI.getPosts(userId, page, limit)
            dispatch(setPostsSuccess(response.data))
        } catch (e) {
            dispatch(setPostsError('Posts fetching error: ' + e))
        }
    }
}
export const getPost = (postId: number) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch(setPostsError(null))
            dispatch(setIsLoading())
            const response = await userAPI.getPost(postId)
            dispatch(setPostSuccess(response.data))
        } catch (e) {
            dispatch(setPostsError('Posts fetching error: ' + e))
        }
    }
}