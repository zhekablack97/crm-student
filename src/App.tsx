import React from 'react';
import './App.css';
import Name from './components/Name/';
import ButtonAdd from './components/ButtonAdd';



const App: React.FC = () => {

  return (
    <div>
      <Name name=""/>
      <ButtonAdd/>
    </div>
  );
}

export default App;
