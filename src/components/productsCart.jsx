import React from 'react'
import '../styles/productsCart.css'
import { NavLink } from 'react-router-dom'
import PriceTotal from "./priceTotal"
import ProductsAddCart from './productsAddCart'

const ProductsCart = () => {

  return (
    <>
      <div className="container-gridCart">
        <ProductsAddCart />
      </div>
      <PriceTotal />
      <div className="container-btn-buy">
        <NavLink to="/pedido">
          <button className="btn-buy"> Comprar </button>
        </NavLink>
      </div>
    </>

  )
}

export default ProductsCart