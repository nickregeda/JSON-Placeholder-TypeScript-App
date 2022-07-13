import {AlbumsActions, AlbumsActionsTypes, AlbumsState} from "../../types/albums";

const initialState: AlbumsState = {
    albums: [],
    album: null,
    error: null,
    isLoading: false,
    limit: 5,
    page: 1
}

export const albumReducer = (state = initialState, action: AlbumsActions): AlbumsState => {
    switch (action.type) {
        case AlbumsActionsTypes.GET_ALBUMS:
            return {
                ...state,
                isLoading: true
            }
        case AlbumsActionsTypes.GET_ALBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload,
                isLoading: false
            }
            case AlbumsActionsTypes.GET_ALBUM_SUCCESS:
            return {
                ...state,
                album: action.payload,
                isLoading: false
            }
        case AlbumsActionsTypes.GET_ALBUMS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case AlbumsActionsTypes.SET_ALBUMS_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}