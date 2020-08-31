import React from 'react'
import WithOutBuying from './withoutBuying'
import ProductsCart from '../productsCart'
import { useSelector } from 'react-redux'


const Buying = () => {

  const stateCart = useSelector(state => state.cartReducer.cart)

  return (
    <>
      {
        stateCart.length === 0
          ? <WithOutBuying />

          : <ProductsCart />
      }
    </>
  )
}

export default Buying