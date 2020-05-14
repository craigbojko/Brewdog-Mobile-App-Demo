import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withStyles, Grid } from '@material-ui/core'

import {
  getBeers,
  getBeersByType
} from '../../../store/actions'
import {
  selectBeersLoading,
  selectBeersByType
} from '../../../store/selectors/beer.selector'

import LoadingBoundary from '../../presenters/LoadingBoundary'
import BeerTile from '../../presenters/BeerTile'

const styles = theme => ({
  wrapper: {
    padding: 10
  }
})

const BeerPage = ({ classes, loading, type, beers, requestBeers, requestBeersByType, ...other }) => {
  useEffect(() => {
    if (type === 'all') {
      requestBeers()
    } else {
      requestBeersByType(type)
    }
  }, [requestBeers, requestBeersByType, type])

  const beerTiles = ((beers && beers[type]) || []).map(beer => (
    <Grid item xs={4} sm={6} key={`beer-tile-${beer.name}`}>
      <BeerTile
        data={beer}
      />
    </Grid>
  ))

  return (
    <LoadingBoundary isLoading={loading}>
      <div
        className={classes.wrapper}
        id={`beer-page-${type}`}
        aria-labelledby={`beer-page-${type}`}
        {...other}
      >
        <Grid container spacing={3}>
          {beerTiles}
        </Grid>
      </div>
    </LoadingBoundary>
  )
}

BeerPage.propTypes = {
  type: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  loading: state => selectBeersLoading(state),
  beers: state => selectBeersByType(state)
})

const mapDispatchToProps = dispatch => ({
  requestBeers: () => dispatch(getBeers()),
  requestBeersByType: type => dispatch(getBeersByType(type))
})

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(BeerPage)
)
