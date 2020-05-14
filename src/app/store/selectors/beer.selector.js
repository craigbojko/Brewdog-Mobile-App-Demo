import { createSelector } from 'reselect'

const selectBeers = state => state.get('beers')

const selectBeersLoading = createSelector(
  selectBeers,
  beerState => beerState.get('loading')
)

const selectBeersByType = createSelector(
  selectBeers,
  beerState => {
    return beerState.get('types').toJS() || {}
  }
)

export {
  selectBeersLoading,
  selectBeersByType
}
