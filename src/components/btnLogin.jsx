import React from 'react'
import '../styles/btnLogin.css'

const BtnLogin = ({ text }) => {
  return (
    <button className="btn-login"> {text} </button>
  )
}

export default BtnLogin