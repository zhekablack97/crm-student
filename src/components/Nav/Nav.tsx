import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.sass'

const Nav: React.FC = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse container">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className="nav-link" to="/">Общая таблица</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/students">Информация о учениках</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;