import {Photo, PhotosActions, PhotosActionsType} from "../../types/photos";
import {Dispatch} from "redux";
import {photoAPI} from "../../api/api";

//AC
export const setPhotosPage = (payload: number): PhotosActions => ({type: PhotosActionsType.SET_PHOTOS_PAGE, payload})
export const setPhotoSuccess = (payload: Photo): PhotosActions => ({type: PhotosActionsType.GET_PHOTO_SUCCESS, payload})
export const setPhotosSuccess = (payload: Photo[]): PhotosActions => ({
    type: PhotosActionsType.GET_PHOTOS_SUCCESS,
    payload
})
export const setPrePhotosSuccess = (payload: { data: Photo[], albumId: number } | false): PhotosActions => ({
    type: PhotosActionsType.SET_PRE_PHOTOS,
    payload
})
export const setPhotosError = (payload: string | null): PhotosActions => ({
    type: PhotosActionsType.GET_PHOTOS_ERROR,
    payload
})
export const setIsLoading = (): PhotosActions => ({type: PhotosActionsType.GET_PHOTOS})

//TC
export const getPhotos = (albumId: number, page: number, limit: number) => {
    return async (dispatch: Dispatch<PhotosActions>) => {
        try {
            dispatch(setPhotosError(null))
            dispatch(setIsLoading())
            const response = await photoAPI.getPhotos(albumId, page, limit)
            dispatch(setPhotosSuccess(response.data))
        } catch (e) {
            dispatch(setPhotosError('Photos fetching error: ' + e))
        }
    }
}
export const getPrePhotos = (albumId: number, page: number, limit: number) => {
    return async (dispatch: Dispatch<PhotosActions>) => {
        try {
            dispatch(setPhotosError(null))
            dispatch(setPrePhotosSuccess(false)) // ???
            dispatch(setIsLoading())
            const response = await photoAPI.getPhotos(albumId, page, limit)
            dispatch(setPrePhotosSuccess({data: response.data, albumId: albumId}))
        } catch (e) {
            dispatch(setPhotosError('Photos fetching error: ' + e))
        }
    }
}