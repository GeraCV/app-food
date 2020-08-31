import React from 'react'
import CardProduct from '../cardProduct'
import { useSelector } from 'react-redux'

const Foods = () => {

  const state = useSelector(state => state.rootReducer.food)
  const foods = state.filter(el => {
    return el.id.startsWith('food')
  })

  return (
    <div className="container-cards">
      {
        foods.map(el => {
          return (
            <CardProduct
              key={el.id}
              id={el.id}
              image={el.image}
              name={el.name}
              ingredients={el.ingredients}
              description={el.description}
              price={el.price}
            />
          )
        })
      }
    </div>
  )
}

export default Foods