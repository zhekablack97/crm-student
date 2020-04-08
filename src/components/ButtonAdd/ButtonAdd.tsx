import React, { HTMLAttributes } from 'react';
import './ButtonAdd.css';

export interface ButtonAddProps extends HTMLAttributes<HTMLButtonElement>{
    onClick: () => void
}

const ButtonAdd : React.FC<ButtonAddProps> = (onClick) => {
    return(
        <button onClick={console.log(2)}>+</button>
    )
}

export default ButtonAdd