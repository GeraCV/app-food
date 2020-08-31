import React from 'react'
import FormBuy from '../formBuying'
import MethodBuy from '../methodBuy'
import ProductsAddCart from '../productsAddCart'
import PriceTotal from '../priceTotal'
import '../../styles/informationBuying.css'
import WithOutBuying from './withoutBuying'
import { useSelector } from 'react-redux'



const InformationBuying = () => {

  const stateCart = useSelector(state => state.cartReducer.cart)


  return (

    stateCart.length === 0
      ? <WithOutBuying />

      : <div className="container-cart-buy">
        <div className="container-buy-primary">
          <FormBuy />
        </div>
        <div className="container-buy-second">
          <div className="grid-products-cart">
            <ProductsAddCart />
          </div>
          <PriceTotal />
          <MethodBuy />
        </div>
      </div>
  )
}

export default InformationBuying