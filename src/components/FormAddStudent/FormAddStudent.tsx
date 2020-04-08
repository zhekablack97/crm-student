import React, { useState } from 'react';

const FormAddStudent: React.FC = () =>{

    const [name, setName] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return(
        <div>
            <input
                onChange={changeHandler}
                value={name}
                type="text"
                id="name"/>
            <label htmlFor="name" >
                Введите имя ученика 
            </label>
        </div>
    )
}

export default FormAddStudent;