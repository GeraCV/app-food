import React from 'react'
import CardProduct from '../cardProduct'
import '../../styles/allProducts.css'
import { useSelector } from 'react-redux'

const AllProducts = () => {

  const food = useSelector(state => state.rootReducer.food)


  return (

    <div className="main-section">
      <div className="container-subtitle">
        <h2 className="subtitle-principal"> Más vendidos </h2>
      </div>
      <div className="container-cards">
        {food.map(el => {
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
    </div>
  )
}

export default AllProducts

