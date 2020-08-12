import React from 'react'
import Card from './card'
import '../styles/gridCard.css'
import { useSelector } from 'react-redux'

const GridCard = () => {

  const food = useSelector(state => state.rootReducer.food)


  return (
    <div className="container-cards">
      {food.map(el => {
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

export default GridCard