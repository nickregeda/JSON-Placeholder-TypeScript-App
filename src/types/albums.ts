export interface Album {
    userId: number
    id: number
    title: string
}

export interface AlbumsState {
    albums: Album[]
    album: Album | null
    isLoading: boolean
    error: null | string
    limit: number
    page: number
}

export enum AlbumsActionsTypes {
    GET_ALBUMS = 'GET_ALBUMS',
    GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS',
    GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS',
    GET_ALBUMS_ERROR = 'GET_ALBUMS_ERROR',
    SET_ALBUMS_PAGE = 'SET_ALBUMS_PAGE'
}

interface GetAlbumsAction {
    type: AlbumsActionsTypes.GET_ALBUMS
}

interface GetAlbumsSuccessAction {
    type: AlbumsActionsTypes.GET_ALBUMS_SUCCESS
    payload: Album[]
}

interface GetAlbumSuccessAction {
    type: AlbumsActionsTypes.GET_ALBUM_SUCCESS
    payload: Album
}

interface GetAlbumsErrorAction {
    type: AlbumsActionsTypes.GET_ALBUMS_ERROR
    payload: string | null
}

interface SetAlbumsPage {
    type: AlbumsActionsTypes.SET_ALBUMS_PAGE
    payload: number
}

export type AlbumsActions =
    GetAlbumsAction
    | GetAlbumsSuccessAction
    | GetAlbumSuccessAction
    | GetAlbumsErrorAction
    | SetAlbumsPage