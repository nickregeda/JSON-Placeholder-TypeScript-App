import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {postReducer} from "./postReducer";
import {commentReducer} from "./commentReducer";
import {albumReducer} from "./albumReducer";
import {photoReducer} from "./photoReducer";

export const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    postReducer,
    commentReducer,
    albumReducer,
    photoReducer
})

export type RootState = ReturnType<typeof rootReducer>