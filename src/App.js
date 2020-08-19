import React from 'react'
import './styles/root.css'
import store from './redux/store'
import { getFoodDrink } from './redux/actionCreators'
import Header from './components/header'
import Menu from './components/menu'
import GridCard from './components/gridCard'
import CartGrid from './components/cartGrid'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

store.dispatch(getFoodDrink())

function App() {
  return (
    <>
      <Provider store={store} >
        <Router>
          <Header />
          <Menu />
          <Switch>
            <Route path="/carrito-compra" component={CartGrid} />
            <Route path="/" component={GridCard} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
