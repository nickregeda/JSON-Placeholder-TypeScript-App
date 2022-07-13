import React, {Dispatch, SetStateAction} from 'react';
// @ts-ignore
import classes from './MyModal.module.css'

interface Modal {
    children: React.ReactNode
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
}

const MyModal: React.FC<Modal> = ({children, visible, setVisible}) => {
    const rootClasses = [classes.myModal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;