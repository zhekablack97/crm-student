import React from 'react';
import './ListStudents.css';

interface ListStudentsProps{
    students: any[]
}

const ListStudents: React.FC<ListStudentsProps> = ({students}) => {
    return(
        <ul>
            {students.map(todo => {
                return (
                    <li>
                        <label htmlFor=""></label>
                        <span></span>
                        <i>delete</i>
                        <input type="checbox"/>
                    </li>
                )
            })}
            
        </ul>
    )
}
export default ListStudents;