import React from 'react';
// @ts-ignore
import s from './MyButton.module.css'

interface Button {
    children: React.ReactNode
    onClick: () => void
}

const MyButton: React.FC<Button> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={s.button}>{children}</button>
    );
};

export default MyButton;