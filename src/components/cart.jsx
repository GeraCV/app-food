import React from 'react'
import '../styles/cart.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SEND_PRICE } from '../redux/actions'
import { deleteCart } from '../redux/actionCreators'

const sendPrice = (id, name, price, quantity, valueTotal) => {
  return ({
    type: SEND_PRICE,
    data: { id, name, price, quantity, valueTotal }
  })
}


const Cart = ({ name, image, price, id }) => {

  const state = useSelector(state => state.cartReducer.idCart)

  const dispatch = useDispatch()


  const deleteToCart = ({ name, image, price, id }) => {
    dispatch(deleteCart({ name, image, price, id }))
  }

  const priceProduct = e => {
    const price = 100
    const quantity = Number(e.target.value)
    const valueTotal = quantity * price
    dispatch(sendPrice(2, "Tacos", 100, quantity, valueTotal))
    console.log(valueTotal)
  }



  return (

    <article className="container-product" >
      <div className="container-img" >
        <img className="img-food" src={image} alt={name} />
      </div>
      <div className="container-info-product">
        <h2 className="txt name-product">  {name} </h2>
        <p className="txt price-product"> Precio: {price} MXN </p>
        <div className="selection">
          <p className="txt-quantity"> Cantidad: </p>
          <select className="select"
            onChange={priceProduct}
          >
            <option className="option" value="1"> 1 </option>
            <option className="option" value="2"> 2 </option>
            <option className="option" value="3"> 3 </option>
            <option className="option" value="4"> 4 </option>
            <option className="option" value="5"> 5 </option>
          </select>
        </div>
        <div className="container-btn-delete">
          {
            state.find(el => el === id)
              ? < button
                className="btn-delete"
                onClick={() => deleteToCart({ name, image, price, id })}
              >
                Eliminar </button>
              : ''
          }

        </div>
      </div>
    </article>
  )
}

export default Cart