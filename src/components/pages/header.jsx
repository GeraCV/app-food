import React from 'react'
import '../../styles/header.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const cart = useSelector(state => state.cartReducer.idCart)


  return (
    <header className="main-header">
      <div className="container-title">
        <NavLink to="/" className="enlace">
          <h1 className="header-title"> Food and drinks </h1>
        </NavLink>
      </div>
      <NavLink to="/cart-buy" className="enlace">
        <div className="cart">
          <h3 className="number-card"> Cart : {cart.length} </h3>
        </div>
      </NavLink>
    </header>
  )
}

export default Header 