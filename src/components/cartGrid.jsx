import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './cart'
import EmptyCart from './emptyCart'

const CartGrid = () => {

  const stateCart = useSelector(state => state.cartReducer.cart)

  return (
    <div className="container-gridCart">

      {
        stateCart.length === 0
          ? <EmptyCart />

          : stateCart.map(({ name, image, price, id }) => {
            return (
              <Cart
                id={id}
                name={name}
                image={image}
                price={price}
              />)
          })

      }
    </div>
  )
}

export default CartGrid