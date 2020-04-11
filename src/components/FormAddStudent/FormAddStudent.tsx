import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
interface FormAddStudentProps {
    onAdd(title:string): void
}

const FormAddStudent: React.FC<FormAddStudentProps> = props =>{

  const [name, setName] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      props.onAdd(name)
      setName('')
    }
  }

  return(

    <div>



      <input
        onChange={changeHandler}
        value={name}
        type="text"
        id="name"
        placeholder="Введите имя ученика"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="name" >
        Введите имя ученика 
      </label>
    </div>
  )
}

export default FormAddStudent;