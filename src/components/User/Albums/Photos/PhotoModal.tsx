import React from 'react';
// @ts-ignore
import s from './Photos.module.css'
import {Photo} from "../../../../types/photos";

const PhotoModal: React.FC<Photo> = ({title, url, id, thumbnailUrl, albumId}) => {
    // console.log(id)
    return (
        <div className={s.photo_page_container}>
            <img className={s.photo_page_img} src={url} alt=""/>
            <div className={s.photo_page_title}>{title}</div>
        </div>
    );
};

export default PhotoModal;