import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GET_FOOD_AND_DRINKS, ADD_TO_CART, DELETE_TO_CART, SEND_PRICE } from './actions'

const intialStateFood = {
  food: []
}

const intialStateCart = {
  cart: [],
  idCart: [],
  cartShop: []
}


const rootReducer = (state = intialStateFood, action) => {
  switch (action.type) {
    case GET_FOOD_AND_DRINKS:
      return {
        food: action.data
      }
    default:
      return state
  }
}

const cartReducer = (state = intialStateCart, action) => {

  switch (action.type) {
    case ADD_TO_CART:

      const id = action.data.id

      if (state.idCart.find(d => d === id)) return state
      return {
        cart: state.cart.concat(action.data),
        idCart: state.idCart.concat(id)
      }


    case DELETE_TO_CART:

      const ident = action.data.id

      return {
        ...state,
        cart: state.cart.filter(el => el.id !== ident),
        idCart: state.idCart.filter(d => d !== ident)
      }

    case SEND_PRICE:
      const idProductCart = action.data.id

      if (state.cartShop.find(ed => ed === idProductCart)) return state
      return {
        ...state,
        cartShop: state.cartShop.concat(action.data)
      }

    default:
      return state
  }

}



export default createStore(combineReducers({ rootReducer, cartReducer }), composeWithDevTools(applyMiddleware(thunk)))