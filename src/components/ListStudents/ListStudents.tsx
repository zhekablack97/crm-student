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
const sortByTime = (students: any) => {
  students.sort((a: any, b: any) => a.time > b.time ? 1 : -1)
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
  sortByTime(students);
  return(
    <ListGroup as="ul" variant="flush" >
      {
      students.map(students => {
        const clasess = ['list-student']
        const {name, checkStatus, id, price, time} = students

        if(checkStatus){
          clasess.push('true-student')
        }
        
        return (
          <ListGroup.Item bsPrefix={clasess.join(' ')} as="li" key={id} >
            <Card bsPrefix="list-student-card">
              <Row>
                <Col xl="1" className="d-flex align-items-center list-student-accent">
                  <Card.Text bsPrefix="list-student-time" as="span">
                    {time}
                  </Card.Text>
                </Col>
                <Col xl="9" className="list-student-information">
                  <Card.Text className="list-student-name">
                    {name}
                  </Card.Text>
                  <Card.Text bsPrefix="list-student-signature" as="span">
                    Цена занятия {price} ₽
                  </Card.Text>
                  
                </Col>
                <Col xl="2" className="d-flex align-items-center justify-content-end">
                  <Button onClick={() => handleToggle(id)} className="list-student-button"><FontAwesomeIcon icon={faPlus} /></Button>
                  <Button onClick={() => onRemove(id)} className="list-student-button"><FontAwesomeIcon icon={faUserMinus} /></Button>
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