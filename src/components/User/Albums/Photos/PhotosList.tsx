import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {usePhotosActions} from "../../../../hooks/useActions";
// @ts-ignore
import s from './Photos.module.css'
import MyModal from "../../../UI/modal/MyModal";
import PhotoModal from "./PhotoModal";
import PhotoItem from "./PhotoItem";

interface PhotoProps {
    albumId: number | undefined
}

const PhotosList: React.FC<PhotoProps> = ({albumId}) => {
    const {photos, isLoading, error, page, limit} = useTypedSelector(state => state.photoReducer)
    const {getPhotos} = usePhotosActions()

    useEffect(() => {
        getPhotos(Number(albumId), page, limit)
    }, [page])

    if (error) {
        return <h1>{error}</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const photosElements = photos.map(p => <PhotoItem title={p.title} thumbnailUrl={p.thumbnailUrl} albumId={p.albumId}
                                                      id={p.id} url={p.url} key={p.id}/>)

    return (
        <div className={s.container}>
            <div className={s.photos_container}>
                {photosElements}
            </div>
        </div>
    );
};

export default PhotosList;