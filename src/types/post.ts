export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostState {
    posts: Post[]
    post: Post | null,
    page: number
    limit: number
    isLoading: boolean
    error: null | string
}

export enum PostActionTypes {
    GET_POSTS = 'GET_POSTS',
    GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
    GET_POST_SUCCESS = 'GET_POST_SUCCESS',
    GET_POSTS_ERROR = 'GET_POSTS_ERROR',
    SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface GetPostsAction {
    type: PostActionTypes.GET_POSTS
}

interface GetPostsSuccessAction {
    type: PostActionTypes.GET_POSTS_SUCCESS
    payload: Post[]
}
interface GetPostSuccessAction {
    type: PostActionTypes.GET_POST_SUCCESS
    payload: Post
}

interface GetPostsErrorAction {
    type: PostActionTypes.GET_POSTS_ERROR
    payload: string | null
}

interface SetPostsPageAction {
    type: PostActionTypes.SET_POSTS_PAGE
    payload: number
}

export type PostsAction = GetPostsAction | GetPostsErrorAction | GetPostsSuccessAction | SetPostsPageAction | GetPostSuccessAction