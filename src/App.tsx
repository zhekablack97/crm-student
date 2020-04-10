import React, { useState } from 'react';
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
  
  const toggleHandler = (id:number) => {
    setStudents(prev => prev.map(student => {
      console.log(student.checkStatus)
      if (student.id === id){
        
        student.checkStatus = !student.checkStatus
      }
      return student
    }))
  }
  const removeHandler = (id:number) => {
    setStudents(prev => prev.filter(student => student.id !== id ))
  }


  return (
    <div>
      <Name/>
      <ButtonAdd/>
      <FormAddStudent 
        onAdd={addHandler}/>
      <ListStudents 
        students={students} 
        onTogle={toggleHandler} 
        onRemove={removeHandler}/>
    </div>
  );
}

export default App;
