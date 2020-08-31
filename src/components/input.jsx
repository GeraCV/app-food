import React from 'react'

const InputForm = ({ name, placeholder }) => {
  return (
    <input type="text" name={name} placeholder={placeholder} className="inpt-form" required />
  )
}

export default InputForm