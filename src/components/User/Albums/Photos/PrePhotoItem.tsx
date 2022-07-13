import React from 'react';
import {Photo} from "../../../../types/photos";
// @ts-ignore
import s from "../Albums.module.css";
import PhotoModal from "./PhotoModal";
import MyModal from "../../../UI/modal/MyModal";

const PrePhotoItem: React.FC<Photo> = ({albumId, url, id, title, thumbnailUrl}) => {
    const [modal, setModal] = React.useState(false)

    return (
        <div className={s.photo_item}>
            <MyModal visible={modal} setVisible={setModal}>
                <PhotoModal url={url} title={title} id={id} albumId={albumId} thumbnailUrl={thumbnailUrl}/>
            </MyModal>
            <img onClick={() => setModal(true)} className={s.pre_img} src={thumbnailUrl} alt=""/>
        </div>
    );
};

export default PrePhotoItem;