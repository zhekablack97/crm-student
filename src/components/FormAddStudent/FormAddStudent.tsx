import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
interface FormAddStudentProps {
  onAdd(title:string): void
  show: boolean
  onHide: () => void
}

const FormAddStudent: React.FC<FormAddStudentProps> = props =>{
  const {onAdd, show, onHide} = props
  const [name, setName] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter'){
      onAdd(name)
      setName('')
    }
  }


  return(
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Добавте нового ученика</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FormAddStudent;