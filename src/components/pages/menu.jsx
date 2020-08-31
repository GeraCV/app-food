import React from 'react'
import '../../styles/menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="/foods" className="enlace">
        <div className="c-food">
          <p className="text-menu"> Comida </p>
        </div>
      </NavLink>
      <NavLink to="/drinks" className="enlace">
        <div className="c-drinks">
          <p className="text-menu"> Bebidas </p>
        </div>
      </NavLink>
    </div>
  )
}

export default Menu