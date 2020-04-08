import React from 'react';
import './App.css';
import Name from './components/Name/';
import ButtonAdd from './components/ButtonAdd';
import FormAddStudent from './components/FormAddStudent';



const App: React.FC = () => {

  return (
    <div>
      <Name/>
      <ButtonAdd/>
      <FormAddStudent />
    </div>
  );
}

export default App;
