export interface Photo {
    albumId: number | undefined
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

interface PrePhotos {
    albumId: number
    data: Photo[]
}

export interface PhotosState {
    photos: Photo[]
    pre_photos: PrePhotos[]
    photo: Photo | null
    isLoading: boolean
    error: null | string
    page: number
    limit: number
}

export enum PhotosActionsType {
    GET_PHOTOS = 'GET_PHOTOS',
    GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS',
    GET_PHOTOS_ERROR = 'GET_PHOTOS_ERROR',
    GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS',
    SET_PHOTOS_PAGE = 'SET_PHOTOS_PAGE',
    SET_PRE_PHOTOS = 'SET_PRE_PHOTOS',
}

interface GetPhotosAction {
    type: PhotosActionsType.GET_PHOTOS
}

interface GetPhotosSuccessAction {
    type: PhotosActionsType.GET_PHOTOS_SUCCESS
    payload: Photo[]
}

interface GetPhotosErrorAction {
    type: PhotosActionsType.GET_PHOTOS_ERROR
    payload: null | string
}

interface GetPhotoSuccessAction {
    type: PhotosActionsType.GET_PHOTO_SUCCESS
    payload: Photo
}

interface SetPhotosPage {
    type: PhotosActionsType.SET_PHOTOS_PAGE
    payload: number
}

interface SetPrePhotos {
    type: PhotosActionsType.SET_PRE_PHOTOS
    payload: PrePhotos | false
}

export type PhotosActions =
    GetPhotosAction
    | GetPhotosSuccessAction
    | GetPhotoSuccessAction
    | GetPhotosErrorAction
    | SetPhotosPage
    | SetPrePhotos