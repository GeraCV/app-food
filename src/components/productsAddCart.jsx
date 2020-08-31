import React from 'react'
import { useSelector } from 'react-redux'
import CardProductCart from './cardProductCart'

const ProductsAddCart = () => {

  const stateCart = useSelector(state => state.cartReducer.cart)

  return (
    <>
      {
        stateCart.map(({ name, image, price, id }) => {
          return (
            <CardProductCart
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
            />)
        })
      }
    </>
  )
}

export default ProductsAddCart