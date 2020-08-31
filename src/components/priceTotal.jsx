import React from 'react'
import { useSelector } from 'react-redux'

const PriceTotal = () => {

  const statePrices = useSelector(state => state.cartReducer.prices)

  return (
    <div className="container-price-total">
      <h3 className="text-t"> Total : {statePrices.length === 0
        ? ''
        : statePrices.reduce((a, b) => a + b)
      } </h3>
    </div>
  )
}

export default PriceTotal