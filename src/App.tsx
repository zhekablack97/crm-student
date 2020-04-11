import React, { useState, useEffect } from 'react';
import './App.css';
import Name from './components/Name/';
import ButtonAdd from './components/ButtonAdd';
import FormAddStudent from './components/FormAddStudent';
import ListStudents from './components/ListStudents';
import { IStudent } from './interfaces';



const App: React.FC = () => {
  const [students, setStudents] = useState<IStudent[]>([])

  // function add student 
  const addHandler = (name: string) => {
    const newStudent: IStudent = {
      name: name,
      id: Date.now(),
      checkStatus: false
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

  return (
    <div>
      <Name/>
      <ButtonAdd/>
      <FormAddStudent 
        onAdd={addHandler}/>
      <ListStudents 
        students={students} 
        onToggle={toggleHandler} 
        onRemove={removeHandler}/>
    </div>
  );
}

export default App;
