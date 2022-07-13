import React from 'react';
// @ts-ignore
import s from "./Photos.module.css";
import MyModal from "../../../UI/modal/MyModal";
import PhotoModal from "./PhotoModal";
import {Photo} from "../../../../types/photos";


const PhotoItem: React.FC<Photo> = ({albumId, id, title, thumbnailUrl, url}) => {
    const [modal, setModal] = React.useState(false)

    return (
        <div className={s.item}>
            <MyModal visible={modal} setVisible={setModal}>
                <PhotoModal url={url} title={title} id={id} albumId={albumId} thumbnailUrl={thumbnailUrl}/>
            </MyModal>
            <div><img onClick={() => setModal(true)} className={s.img} src={url} alt=""/></div>
        </div>
    );
};

export default PhotoItem;