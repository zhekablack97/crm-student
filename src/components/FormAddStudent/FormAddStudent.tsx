import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

interface FormAddStudentProps {
  onAdd(title:string, price:string, target:string): void
  show: boolean
  onHide: () => void
  
}

const FormAddStudent: React.FC<FormAddStudentProps> = props =>{
  const {onAdd, show, onHide} = props
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [time, setTime] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const changeHandlerPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value)
  }

  const changeHandlerTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value)
  }

  const addStudent = (event: any) => {
    if(name && price){
      onAdd(name, price, time)
      setName('')
      setPrice('')
      setTime('')
      onHide()
    }
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
              <Form.Control required type="text" placeholder="Иван" onChange={changeHandler} value={name} />
            </Col>
          </Form.Group>
          <Form.Group controlId="formPlaintextName" as={Row}>
            <Form.Label column sm="3">
              Цена занятия
            </Form.Label>
            <Col sm="9">
              <Form.Control required type="text" placeholder="1000" onChange={changeHandlerPrice} value={price} />
            </Col>
          </Form.Group>
          <Form.Group controlId="formPlaintextName" as={Row}>
            <Form.Label column sm="3">
              Время занятия
            </Form.Label>
            <Col sm="9">
              <Form.Control required type="time" placeholder="10:25" onChange={changeHandlerTime} value={time} />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addStudent}>
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