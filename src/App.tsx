import React, { useState } from 'react';
import './App.css';
import Name from './components/Name/';
import ButtonAdd from './components/ButtonAdd';
import FormAddStudent from './components/FormAddStudent';



const App: React.FC = () => {
  const [student, setStudent] = useState([])

  const addHandler = (name: string) => {
    console.log('add new student', name)
  }

  return (
    <div>
      <Name/>
      <ButtonAdd/>
      <FormAddStudent onAdd={addHandler}/>
    </div>
  );
}

export default App;
