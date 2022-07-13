import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
// import ThunksCreators from "../store/thunk-creators/index";
import * as postsThunks from '../store/thunk-creators/postsThunks'
import * as usersThunks from '../store/thunk-creators/usersThunks'
import * as todosThunks from '../store/thunk-creators/todosThunks'
import * as commentsThunks from '../store/thunk-creators/commentsThunks'
import * as albumsThunks from '../store/thunk-creators/albumsThunks'
import * as photosThunks from '../store/thunk-creators/photosThunks'

export const useUsersActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(usersThunks, dispatch)
}
export const usePostsActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(postsThunks, dispatch)
}
export const useTodosActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(todosThunks, dispatch)
}
export const useCommentsActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(commentsThunks, dispatch)
}
export const useAlbumsActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(albumsThunks, dispatch)
}
export const usePhotosActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(photosThunks, dispatch)
}