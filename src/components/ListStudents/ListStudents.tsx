import React from 'react';
import './ListStudents.css';
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
    console.log(students)
    const handleToggle = (studentId: IStudent['id']) => onToggle(studentId);
 
    return(
        <ul>
            {students.map(students => {
                const clasess = ['student']
                const {name, checkStatus, id} = students
 
                if(checkStatus){
                    clasess.push('true')
                }
 
                return (
                    <li key={id} className={clasess.join(' ')}>
                        <label htmlFor=""></label>
                        <span>{name}</span>
                        <i onClick={() => onRemove(id)}> delete</i>
                        <input type="checkbox" checked={checkStatus} onChange={() => handleToggle(id)} />
                    </li>
                )
            })}
           
        </ul>
    )
}
export default ListStudents;