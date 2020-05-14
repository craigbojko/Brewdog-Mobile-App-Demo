import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import beers from './beer.reducer'
import modal from './modal.reducer'
import cart from './cart.reducer'

export default history => combineReducers({
  router: connectRouter(history),
  beers,
  modal,
  cart
})
