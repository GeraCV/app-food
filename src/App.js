import React from 'react'
import './styles/root.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { getFoodDrink } from './redux/actionCreators'
import Header from './components/header'
import Menu from './components/menu'

import GridCard from './components/gridCard'

store.dispatch(getFoodDrink())

function App() {
  return (
    <>
      <Provider store={store} >
        <Header />
        <Menu />
        <GridCard />
      </Provider>
    </>
  );
}

export default App;
