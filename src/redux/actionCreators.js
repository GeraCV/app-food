const { GET_FOOD_AND_DRINKS, ADD_TO_CART, DELETE_TO_CART } = require("./actions")

const getFoodDrink = () => async (dispatch) => {
  const answear = await fetch('http://my-json-server.typicode.com/GeraCV/db-json-food/food')
  const response = await answear.json()
  return dispatch({
    type: GET_FOOD_AND_DRINKS,
    data: response
  })
}

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

export { getFoodDrink, addCart, deleteCart }