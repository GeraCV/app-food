const { GET_FOOD_AND_DRINKS } = require("./actions")

const getFoodDrink = () => async (dispatch) => {
  const answear = await fetch('http://my-json-server.typicode.com/GeraCV/db-json-food/food')
  const response = await answear.json()
  return dispatch({
    type: GET_FOOD_AND_DRINKS,
    data: response
  })
}


export { getFoodDrink }