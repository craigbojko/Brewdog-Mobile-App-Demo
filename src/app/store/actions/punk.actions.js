
import * as constants from '../constants'

export const getBeers = () => ({
  type: constants.GET_BEERS
})

export const getBeersByType = type => ({
  type: constants.GET_BEERS_BY_TYPE,
  beerType: type
})
