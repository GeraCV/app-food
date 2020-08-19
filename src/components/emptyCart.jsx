import React from 'react'
import '../styles/emptyCart.css'

const EmptyCart = () => {
  return (
    <div className="container-message">
      <img className="image-cart" src="https://i.pinimg.com/236x/af/dc/aa/afdcaa847b0c912f132af7a874571705.jpg" alt="emojisad" />
      <p className="text-message"> Tu carrito de compras está vacío. </p>
    </div>
  )
}
export default EmptyCart