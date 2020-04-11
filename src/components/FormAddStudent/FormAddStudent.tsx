import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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

  const addStudent = () => {
    onAdd(name)
    setName('')
  }

  return(
    <Modal show={show} onHide={onHide} animation={true} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Добавьте нового ученика</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addStudent}>
          <Form.Group controlId="formPlaintextName" as={Row}>
            <Form.Label column sm="3">
              Введите имя ученика
            </Form.Label>
            <Col sm="9">
              <Form.Control type="text" placeholder="Иван" onChange={changeHandler} value={name} />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Добавить ученика 
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default FormAddStudent;