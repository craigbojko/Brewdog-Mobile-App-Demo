import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  withStyles,
  Typography
} from '@material-ui/core'

import {
  openModal
} from '../../../store/actions'

const styles = theme => ({
  beerTile: {
    padding: 10,
    overflow: 'hidden'
  },
  imageWrapper: {
    border: `solid 2px ${theme.palette.primary[400]}`,
    borderRadius: 10,
    padding: 10,
    '& img': {}
  }
})

const BeerTile = ({ classes, data, openModalWithItem, ...other }) => {
  const image = data.image_url || 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg'
  return (
    <div className={classes.beerTile} onClick={openModalWithItem(data)}>
      <div className={classes.imageWrapper}>
        <img src={image} width='auto' height={80} alt={`Beer: ${data.name}`} />
      </div>
      <Typography variant='h6' noWrap title={data.name}>{data.name}</Typography>
      <Typography>ABV: {data.abv}</Typography>
    </div>
  )
}

BeerTile.propTypes = {
  data: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  openModalWithItem: (item) => () => dispatch(openModal(item))
})

export default withStyles(styles, { withTheme: true })(
  connect(null, mapDispatchToProps)(BeerTile)
)
