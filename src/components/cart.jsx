import React from 'react'
import '../styles/cart.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteCart } from '../redux/actionCreators'
import { SEND_PRODUCT } from '../redux/actions'


// const sendProduct = ({ id, name, price }) => {
//   return (
//     {
//       type: SEND_PRODUCT,
//       data: { id, name, price }

//     }
//   )
// }

const Cart = ({ name, image, price, id }) => {

  const state = useSelector(state => state.cartReducer.idCart)
  const dispatch = useDispatch()

  const deleteToCart = ({ name, image, price, id }) => {
    dispatch(deleteCart({ name, image, price, id }))
  }
  // const sendTheProduct = ({ id, name, price }) => {
  //   dispatch(sendProduct({ id, name, price }))
  // }



  return (

    <article className="container-product" >
      <div className="container-img" >
        <img className="img-food" src={image} alt={name} />
      </div>
      <div className="container-info-product">
        <h2 className="txt name-product">  {name} </h2>
        <p className="txt price-product"> Precio: {price} MXN </p>
        <div className="selection">
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