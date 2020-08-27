import React from 'react'
import './styles/root.css'
import store from './redux/store'
import { getFoodDrink } from './redux/actionCreators'
import Header from './components/header'
import Menu from './components/menu'
import GridCard from './components/gridCard'
import CartGrid from './components/cartGrid'
import Foods from './components/foods'
import Drinks from './components/drinks'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Message from './components/message'

store.dispatch(getFoodDrink())

function App() {
  return (
    <>
      <Provider store={store} >
        <Router>
          <Header />
          <Menu />
          <Message />
          <Switch>
            <Route path="/cart-buy" component={CartGrid} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/foods" component={Foods} />
            <Route path="/" component={GridCard} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
