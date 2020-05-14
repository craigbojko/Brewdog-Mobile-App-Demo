import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  withStyles,
  Grid,
  Typography
} from '@material-ui/core'
import {
  ShoppingBasket,
  Delete
} from '@material-ui/icons'

import {
  openBasket,
  closeBasket
} from '../../../store/actions'
import {
  selectCartItems,
  selectCartViewState
} from '../../../store/selectors/cart.selector'

const styles = theme => ({
  basketWrapper: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 600,
    bottom: -550,
    background: 'rgba(0, 0, 0, 0.85)',
    borderRadius: '15px 15px 0 0',
    border: 'solid 2px #333',
    color: 'white',
    outline: 'none',
    transition: 'bottom 0.5s ease',

    '&.collapsed': {
      bottom: -550
    },
    '&.preview': {
      bottom: -450
    },
    '&.open': {
      bottom: 0
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 0 100%',
    height: 35,
    maxHeight: 45,
    flexDirection: 'column',
    outline: 'none',
    '& span': {
      height: 30,
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        marginRight: 10
      }
    }
  },
  headerNudge: {
    borderTop: 'solid 3px #CCC',
    width: 75
  },
  inventory: {
    width: '100%',
    height: 125,
    display: 'flex',
    padding: '5px 25px',
    alignItems: 'center'
  },
  imageWrapper: {
    background: 'white',
    padding: '15px 25px',
    borderRadius: 15
  },
  itemDescription: {
    width: '70%',
    alignItems: 'center'
  }
})

const BasketSlider = ({ classes, viewState, open, close, items, ...other }) => {
  const toggleView = () => {
    if (viewState === 'collapsed' || viewState === 'preview') {
      open()
    } else {
      close()
    }
  }

  return (
    <>
      <div
        className={`${classes.basketWrapper} ${viewState}`}
        id='basket-slider'
        aria-labelledby='basket-slider'
        {...other}
      >
        <div
          className={classes.header}
          role='button'
          tabIndex={0}
          onKeyPress={toggleView}
          onClick={toggleView}
        >
          <div className={classes.headerNudge} />
          <span><ShoppingBasket />Shopping Cart</span>
        </div>
        <div
          className={classes.inventory}
        >
          <Grid container direction='column'>
            {items.map(item => (
              <Grid item xs={12} key={`basket-item-${item.name}`}>
                <Grid container direction='row'>
                  <div className={classes.imageWrapper}>
                    <img src={item.image_url} width='auto' height={50} alt={`Beer: ${item.name}`} />
                  </div>
                  <div className={classes.itemDescription}>
                    <Typography>{item.name}</Typography>
                  </div>
                  <div className={classes.removeItem}>
                    <Delete color='secondary' />
                  </div>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

BasketSlider.propTypes = {
  items: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  items: state => selectCartItems(state),
  viewState: state => selectCartViewState(state)
})

const mapDispatchToProps = dispatch => ({
  open: () => dispatch(openBasket()),
  close: () => dispatch(closeBasket())
})

export default withStyles(styles, { withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(BasketSlider)
)
