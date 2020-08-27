import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { GET_FOOD_AND_DRINKS, ADD_TO_CART, DELETE_TO_CART } from './actions'

const intialStateFood = {
  food: []
}

const intialStateCart = {
  cart: [],
  idCart: [],
  prices: []
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

      const idATC = action.data.id
      const priceATC = action.data.price

      if (state.idCart.find(d => d === idATC)) return state
      return {
        cart: state.cart.concat(action.data),
        idCart: state.idCart.concat(idATC),
        prices: state.prices.concat(priceATC)
      }


    case DELETE_TO_CART:

      const idDTC = action.data.id
      const priceDTC = action.data.price

      return {
        ...state,
        cart: state.cart.filter(el => el.id !== idDTC),
        idCart: state.idCart.filter(d => d !== idDTC),
        prices: state.prices.filter(d => d !== priceDTC)
      }

    default:
      return state
  }
}

export default createStore(combineReducers({ rootReducer, cartReducer }), composeWithDevTools(applyMiddleware(thunk)))