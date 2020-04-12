import React from 'react';
import { IStudent } from '../../interfaces'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import './ListStudents.sass'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

interface ListStudentsProps{
    students: IStudent[]
    onToggle: (id:number) => void
    onRemove: (id:number) => void
}
 
const ListStudents: React.FC<ListStudentsProps> = ({
  students,
  onRemove,
  onToggle
}) => {

  if( students.length === 0){
      return <p>студентов на данный день нет </p>
  }

  const handleToggle = (studentId: IStudent['id']) => onToggle(studentId);

  return(
    <ListGroup as="ul" variant="flush" >
      {students.map(students => {
        const clasess = ['list-student']
        const {name, checkStatus, id, price} = students

        if(checkStatus){
          clasess.push('true-student')
        }
        
        return (
          <ListGroup.Item bsPrefix={clasess.join(' ')} as="li" key={id} >
            <Card bsPrefix="list-student-card">
              <Row>
                <Col xl="10">
                  <Card.Title >
                    {name}
                  </Card.Title>
                  <Card.Text bsPrefix="list-student-signature">
                    Цена занятия {price} ₽
                  </Card.Text>
                </Col>
                <Col xl="2">
                  <Button onClick={() => handleToggle(id)}><FontAwesomeIcon icon={faPlus} /></Button>
                  <Button onClick={() => onRemove(id)}><FontAwesomeIcon icon={faUserMinus} /></Button>
                </Col>
              </Row>
            </Card>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
export default ListStudents;