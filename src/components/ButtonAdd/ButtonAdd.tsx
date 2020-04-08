import React, { HTMLAttributes } from 'react';
import './ButtonAdd.css';

export interface ButtonAddProps extends HTMLAttributes<HTMLButtonElement>{
    onClick?: (() => void)
}

const ButtonAdd: React.FC<ButtonAddProps> = () => {
    return(
        <button>+</button>
    )
}

export default ButtonAdd