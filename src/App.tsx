import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StudentTablPage } from './pages/StudentTabl';
import { StudentPage } from './pages/Students';
import Nav from './components/Nav/';


const App: React.FC = () => {
  
  return (
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route component={StudentTablPage} path="/" exact />
        <Route component={StudentPage} path="/students" exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
