import React, { useState, useEffect } from 'react';
import FormAddStudent from '../components/FormAddStudent';
import ListStudents from '../components/ListStudents';
import { IStudent } from '../interfaces';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const StudentTablPage: React.FC = () => {
  const [students, setStudents] = useState<IStudent[]>([])

  // function add student 
  const addHandler = (name: string, price: string, time:string) => {
    const newStudent: IStudent = {
      name: name,
      id: Date.now(),
      checkStatus: false,
      price: price,
      time: time

    }
    setStudents(prev => [newStudent, ...prev])
  }
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('students') || '[]') as IStudent[]
    setStudents(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  },[students])

  const [modalShow, setModalShow] = useState<boolean>(Boolean);

  const toggleHandler = (id:number) => {
    setStudents(prevStudentsState => {
      const students = prevStudentsState.map(student => {
        return {
          ...student,
          checkStatus: (student.id === id) ? !student.checkStatus : student.checkStatus,
        };
      });
      return students;
    })
  }

  const removeHandler = (id:number) => {
    const shoudRemove = window.confirm('Вы уверены что хотите удалить данного ученика ?')
    if (shoudRemove){
      setStudents(prev => prev.filter(student => student.id !== id ))
    }
  }

  return(
    <div className="students-tabl">
      <Container>
        <Row>
          <Col xs="12">
            <ListStudents 
              students={students} 
              onToggle={toggleHandler} 
              onRemove={removeHandler}
              />
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              Добавить нового ученика 
            </Button>
          </Col>
        </Row>
      </Container>
      
      <FormAddStudent
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAdd={addHandler}
      />
    </div>
  )
}