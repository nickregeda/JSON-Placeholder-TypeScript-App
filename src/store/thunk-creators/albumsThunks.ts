import {Album, AlbumsActions, AlbumsActionsTypes} from "../../types/albums";
import {Dispatch} from "redux";
import {albumAPI} from "../../api/api";

//AC
export const setAlbumsPage = (payload: number): AlbumsActions => ({type: AlbumsActionsTypes.SET_ALBUMS_PAGE, payload})
export const setIsLoading = (): AlbumsActions => ({type: AlbumsActionsTypes.GET_ALBUMS})
export const setAlbumSuccess = (payload: Album): AlbumsActions => ({
    type: AlbumsActionsTypes.GET_ALBUM_SUCCESS,
    payload
})
export const setAlbumsSuccess = (payload: Album[]): AlbumsActions => ({
    type: AlbumsActionsTypes.GET_ALBUMS_SUCCESS,
    payload
})
export const setAlbumError = (payload: string | null): AlbumsActions => ({
    type: AlbumsActionsTypes.GET_ALBUMS_ERROR,
    payload
})

//TC
export const getAlbums = (userId: number, page: number, limit: number) => {
    return async (dispatch: Dispatch<AlbumsActions>) => {
        try {
            dispatch(setAlbumError(null))
            dispatch(setIsLoading())
            const response = await albumAPI.getAlbums(userId, page, limit)
            dispatch(setAlbumsSuccess(response.data))
        } catch (e) {
            dispatch(setAlbumError('Albums fetching error: ' + e))
        }
    }
}
export const getAlbum = (id: number) => {
    return async (dispatch: Dispatch<AlbumsActions>) => {
        try {
            dispatch(setAlbumError(null))
            dispatch(setIsLoading())
            const response = await albumAPI.getAlbum(id)
            dispatch(setAlbumSuccess(response.data))
        } catch (e) {
            dispatch(setAlbumError('Albums fetching error: ' + e))
        }
    }
}