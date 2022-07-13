import React, {useEffect} from 'react';
import {Album} from "../../../types/albums";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {usePhotosActions} from "../../../hooks/useActions";
// @ts-ignore
import s from './Albums.module.css'
import PrePhotoItem from "./Photos/PrePhotoItem";

interface AlbumOnClick {
    onClick: () => void
}

const AlbumItem: React.FC<Album & AlbumOnClick> = ({userId, id, title, onClick}) => {
    const {pre_photos, error, isLoading} = useTypedSelector(state => state.photoReducer)
    const {setPrePhotosSuccess, getPrePhotos} = usePhotosActions()

    useEffect(() => {
        getPrePhotos(Number(id), 1, 6)
    }, [])

    // console.log(pre_photos)

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const photosElements = pre_photos.map(p => p.albumId === id && p.data.map(pd => <PrePhotoItem albumId={pd.albumId}
                                                                                                  url={pd.url}
                                                                                                  id={pd.id}
                                                                                                  title={pd.title}
                                                                                                  thumbnailUrl={pd.thumbnailUrl}
                                                                                                  key={pd.id}/>))

    return (
        <div className={s.item}>
            <div className={s.album_title} onClick={onClick}>{title}</div>
            <div className={s.photos_container}>
                {photosElements}
            </div>
        </div>
    );
};

export default AlbumItem;