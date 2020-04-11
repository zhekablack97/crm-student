import React from 'react';
import { useHistory } from 'react-router-dom';

export const StudentPage: React.FC = () => {

  const history = useHistory();

  return(
    <div>
      <p>
        Описание учеников
      </p>
      <button onClick={() => history.push('/')} >
        назад
      </button>
    </div>
  )
}