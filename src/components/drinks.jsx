import React from 'react'
import Card from './card'
import { useSelector } from 'react-redux'

const Drinks = () => {

  const state = useSelector(state => state.rootReducer.food)
  const drinks = state.filter(el => {
    return el.id.startsWith('drink')
  })

  return (
    <div className="container-cards">
      {
        drinks.map(el => {
          return (
            <Card
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

export default Drinks