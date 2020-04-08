import React from 'react';
import './Name.css';

export interface NameProps{
  name?: string
}


const Name = (props: NameProps) => {
  console.log(props);
    return (
      <span>
        {props.name}
      </span>
    )
}

export default Name;