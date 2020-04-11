import React from 'react';
import { IStudent } from '../../interfaces';
 
interface ListStudentsProps{
    students: IStudent[]
    onToggle: (id:number) => void
    onRemove: (id:number) => void
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


  return(
    <ul>
      {students.map(students => {
        const clasess = ['student']
        const {name, checkStatus, id} = students

        if(checkStatus){
          clasess.push('true-student')
        }
        
        return (
          <li key={id} className={clasess.join(' ')}>
            <label htmlFor={String(id)}>
              <span>{name}</span>
            </label>
            <input type="checkbox" id={String(id)} checked={checkStatus} onChange={() => handleToggle(id)} />
            <i onClick={() => onRemove(id)}> delete</i>
          </li>
        )
      })}
      
    </ul>
  )
}
export default ListStudents;