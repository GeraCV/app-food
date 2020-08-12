import React from 'react'
import '../styles/card.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TO_CART, DELETE_TO_CART } from '../redux/actions'

const addCart = ({ name, image, price, id }) => {
  return (
    {
      type: ADD_TO_CART,
      data: { name, image, price, id }
    }
  )
}

const deleteCart = ({ name, image, price, id }) => {
  return (
    {
      type: DELETE_TO_CART,
      data: { name, image, price, id }
    }
  )
}


const Card = ({ image, name, ingredients, description, price, id }) => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.cartReducer.idCart)


  const addToCart = ({ name, image, price, id }) => {
    dispatch(addCart({ name, image, price, id }))
  }

  const deleteToCart = ({ name, image, price, id }) => {
    dispatch(deleteCart({ name, image, price, id }))
  }


  return (
    <article className="container-card" >
      <div className="container-image" >
        <img className="image-food" src={image} alt={name} />
      </div>
      <div className="container-information">
        <h2 className="text name-food">  {name} </h2>
        <p className="text ingredients-food"> Ingredientes:  {ingredients.join(', ')} </p>
        <p className="text description-food"> Descripción: {description} </p>
        <p className="text price-food"> Precio: {price} MXN </p>
      </div>
      <div className="container-btn">
        {
          state.find(el => el === id)
            ? <button className="btn-f"
              onClick={() => deleteToCart({ name, image, price, id })}
            > Eliminar </button>
            : <button className="btn-f"
              onClick={() => addToCart({ name, image, price, id })}

            > Agregar </button>

        }
      </div>
    </article>
  )
}

export default Card