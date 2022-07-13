import {PhotosActions, PhotosActionsType, PhotosState} from "../../types/photos";
import {isNumber} from "util";

const initialState: PhotosState = {
    photos: [],
    pre_photos: [],
    photo: null,
    error: null,
    isLoading: false,
    limit: 10,
    page: 1,
}

export const photoReducer = (state = initialState, action: PhotosActions): PhotosState => {
    switch (action.type) {
        case PhotosActionsType.GET_PHOTOS:
            return {
                ...state,
                isLoading: true
            }
        case PhotosActionsType.GET_PHOTOS_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false
            }
        case PhotosActionsType.GET_PHOTO_SUCCESS:
            return {
                ...state,
                photo: action.payload,
                isLoading: false
            }
        case PhotosActionsType.GET_PHOTOS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case PhotosActionsType.SET_PHOTOS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case PhotosActionsType.SET_PRE_PHOTOS:
            return {
                ...state,
                pre_photos: action.payload ?
                    state.pre_photos.some(p => action.payload && p.albumId === action.payload.albumId) ?
                        state.pre_photos
                        :
                        [...state.pre_photos,
                            {
                                albumId: action.payload.albumId,
                                data: action.payload.data
                            }
                        ]
                    :
                    [],
                isLoading: false
            }
        default:
            return state
    }
}