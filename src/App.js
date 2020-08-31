import React from 'react'
import './styles/root.css'
import store from './redux/store'
import { getFoodDrink } from './redux/actionCreators'
import Header from './components/pages/header'
import Menu from './components/pages/menu'
import GridCard from './components/pages/allProducts'
import CartGrid from './components/pages/buying'
import Foods from './components/pages/foods'
import Drinks from './components/pages/drinks'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import InformationBuying from './components/pages/informationBuying'


store.dispatch(getFoodDrink())

function App() {
  return (
    <>
      <Provider store={store} >
        <Router>
          <Header />
          <Menu />
          <Switch>
            <Route path="/cart-buy" component={CartGrid} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/foods" component={Foods} />
            <Route path="/pedido" component={InformationBuying} />
            <Route path="/" component={GridCard} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;