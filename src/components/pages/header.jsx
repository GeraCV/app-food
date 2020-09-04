import React from 'react'
import '../../styles/header.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import BtnLogin from '../btnLogin'

const Header = () => {

  const cart = useSelector(state => state.cartReducer.idCart)


  return (
    <header className="main-header">
      <div className="container-title">
        <NavLink to="/" className="enlace">
          <h1 className="header-title header-primary-title"> Food and drinks </h1>
          <h2 className="header-title header-second-title"> {`F&D`}</h2>
        </NavLink>
      </div>
      <div className="container-login">
        <BtnLogin text={"Registrate"} />
        <BtnLogin text={"Inicia Sesión"} />
      </div>
      <NavLink to="/cart-buy" className="enlace">
        <div className="cart">
          <i className="fas fa-shopping-cart cart-shopping"> </i>
          <h3 className="number-card"> {cart.length} </h3>
        </div>
      </NavLink>
      <div className="toogle"> </div>
    </header>
  )
}

export default Header 