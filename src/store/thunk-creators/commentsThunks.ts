import {Comment, CommentAction, CommentsActionTypes} from "../../types/comment";
import {Dispatch} from "redux";
import {userAPI} from "../../api/api";

//AC
export const setCommentsSuccess = (payload: Comment[]): CommentAction => ({
    type: CommentsActionTypes.GET_COMMENTS_SUCCESS,
    payload
})
export const setCommentsError = (payload: string): CommentAction => ({
    type: CommentsActionTypes.GET_COMMENTS_ERROR,
    payload
})
export const setIsLoading = (): CommentAction => ({type: CommentsActionTypes.GET_COMMENTS})

//TC
export const getComments = (postId: number) => {
    return async (dispatch: Dispatch<CommentAction>) => {
        try {
            dispatch(setIsLoading())
            const response = await userAPI.getComments(postId)
            dispatch(setCommentsSuccess(response.data))
        } catch (e) {
            dispatch(setCommentsError('Comments fetching error: ' + e))
        }
    }
}