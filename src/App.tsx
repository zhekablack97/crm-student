import React, { useState } from 'react';
import './App.css';
import Name from './components/Name/';
import ButtonAdd from './components/ButtonAdd';
import FormAddStudent from './components/FormAddStudent';
import ListStudents from './components/ListStudents';



const App: React.FC = () => {
  const [students, setStudents] = useState([])

  const addHandler = (name: string) => {
    const newStudent = {
      name: name,
      id: Date.now(),
      checkStatus: false
    }
    setStudents([newStudent, ...students])
  }

  return (
    <div>
      <Name/>
      <ButtonAdd/>
      <FormAddStudent onAdd={addHandler}/>
      <ListStudents students={students}/>
    </div>
  );
}

export default App;
