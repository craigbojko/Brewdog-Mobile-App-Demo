import { fromJS } from 'immutable'

import * as constants from '../constants'

const initialState = fromJS({
  items: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_BEER_TO_CART:
      return state
        .update('items', items => items.concat(action.item))
        .set('view', 'preview')

    case constants.OPEN_CART:
      return state.set('view', 'open')
    case constants.CLOSE_CART:
      return state.set('view', 'collapsed')
    case constants.PREVIEW_CART:
      return state.set('view', 'preview')

    default:
      return state
  }
}
