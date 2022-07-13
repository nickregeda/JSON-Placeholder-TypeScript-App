import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useAlbumsActions} from "../../../hooks/useActions";
import {Pagination} from "@mui/material";
import AlbumItem from "./AlbumItem";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import s from './Albums.module.css'

interface AlbumsList {
    userId: number | undefined
}

const AlbumsList: React.FC<AlbumsList> = ({userId}) => {
    const navigate = useNavigate()
    const {albums, isLoading, error, limit, page} = useTypedSelector(state => state.albumReducer)
    const {getAlbums, setAlbumsPage} = useAlbumsActions()

    const totalCount = 10
    const albumsCount = Math.ceil(totalCount / limit)

    useEffect(() => {
        userId && getAlbums(userId, page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const albumsElements = albums.map((a) => <AlbumItem onClick={() => navigate(`/albums/${a.id}`)}
                                                        key={a.id}
                                                        userId={a.userId} id={a.id} title={a.title}/>)

    return (
        <div className={s.container}>
            <div className={s.title}>
                Albums
            </div>
            <div className={s.albums_container}>
                {albumsElements}
            </div>
            <Pagination
                count={albumsCount}
                page={page}
                onChange={(_, num) => setAlbumsPage(num)}/>
        </div>
    );
};

export default AlbumsList;