import * as constants from '../constants'

export const addToCart = item => ({
  type: constants.ADD_BEER_TO_CART,
  item
})

export const openBasket = () => ({
  type: constants.OPEN_CART
})

export const closeBasket = () => ({
  type: constants.CLOSE_CART
})

export const previewBasket = () => ({
  type: constants.PREVIEW_CART
})
