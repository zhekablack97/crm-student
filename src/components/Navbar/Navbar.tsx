import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Общая таблица</NavLink></li>
                <li><NavLink to="/students">Информация о учениках</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;