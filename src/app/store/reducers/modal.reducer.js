import { fromJS } from 'immutable'

import * as constants from '../constants'

const initialState = fromJS({
  active: false,
  content: {}
})

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return state
        .set('active', true)
        .set('content', fromJS(action.data))
    case constants.CLOSE_MODAL:
    case constants.ADD_BEER_TO_CART:
      return state.set('active', false)

    default:
      return state
  }
}
