import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './cart'
import EmptyCart from './emptyCart'
import '../styles/cartGrid.css'

const CartGrid = () => {


  const stateCart = useSelector(state => state.cartReducer.cart)
  const statePrices = useSelector(state => state.cartReducer.prices)

  // let sum = if(statePrices.reduce((a, b) => a + b)

  return (
    <>
      {
        stateCart.length === 0
          ? <EmptyCart />

          : <>
            <div className="container-gridCart">
              {stateCart.map(({ name, image, price, id }) => {
                return (
                  <Cart
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                  />)
              })}
            </div>
            <div className="container-price-total">
              <h3 className="text-t"> Total : {statePrices.length === 0
                ? ''
                : statePrices.reduce((a, b) => a + b)
              } </h3>
            </div>
          </>
      }
    </>
  )
}

export default CartGrid