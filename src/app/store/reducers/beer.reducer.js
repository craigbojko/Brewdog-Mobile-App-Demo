import { fromJS } from 'immutable'

import * as constants from '../constants'

const initialState = fromJS({
  loading: false,
  error: null,
  types: {}
})

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_BEERS:
      return state.set('loading', true)
    case constants.GET_BEERS_SUCCESS:
      return state
        .setIn(['types', 'all'], action.payload)
        .merge({
          loading: false,
          error: null
        })
    case constants.GET_BEERS_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload ? action.payload.error : action.error
      })

    case constants.GET_BEERS_BY_TYPE:
      return state.set('loading', true)
    case constants.GET_BEERS_BY_TYPE_SUCCESS:
      return state
        .setIn(['types', action.beerType], action.payload)
        .merge({
          loading: false,
          error: null
        })
    case constants.GET_BEERS_BY_TYPE_FAILURE:
      return state.merge({
        loading: false,
        error: action.payload ? action.payload.error : action.error
      })

    default:
      return state
  }
}
