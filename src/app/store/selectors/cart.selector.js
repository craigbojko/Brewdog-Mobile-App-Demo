import { createSelector } from 'reselect'

const selectCart = state => state.get('cart')

const selectCartItems = createSelector(
  selectCart,
  cartState => {
    return cartState.get('items').toJS() || []
  }
)

const selectCartViewState = createSelector(
  selectCart,
  cartState => {
    return cartState.get('view') || 'collapsed'
  }
)

export {
  selectCartItems,
  selectCartViewState
}
