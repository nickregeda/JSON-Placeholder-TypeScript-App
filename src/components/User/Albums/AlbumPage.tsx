import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useAlbumsActions} from "../../../hooks/useActions";
import PhotosList from "./Photos/PhotosList";
import MyButton from "../../UI/button/MyButton";
// @ts-ignore
import s from './Albums.module.css'

const AlbumPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const {album, isLoading, error} = useTypedSelector(state => state.albumReducer)
    const {getAlbum} = useAlbumsActions()

    useEffect(() => {
        getAlbum(Number(params.albumId))
    }, [])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <div>
            <MyButton onClick={() => navigate(-1)}>Back</MyButton>
            <div className={s.album_page_title}>{album?.title}</div>
            <PhotosList albumId={album?.id}/>
        </div>
    );
};

export default AlbumPage;