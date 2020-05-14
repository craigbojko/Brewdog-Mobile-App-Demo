import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Grid,
  Button
} from '@material-ui/core'

import {
  closeModal,
  addToCart
} from '../../../store/actions'
import {
  selectActiveModal,
  selectModalContent
} from '../../../store/selectors/modal.selector'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '150px 10px 0 10px'
  },
  content: {
    backgroundColor: theme.palette.primary[800],
    borderRadius: 15,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: 25,
    color: theme.palette.common.white,
    position: 'relative',
    outline: 'none'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    background: 'white',
    borderRadius: 15,
    '& img': {
      margin: '0 auto'
    }
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartButton: {
    position: 'absolute',
    bottom: 5
  },
  close: {
    position: 'absolute',
    top: -40,
    left: 10
  }
}))

const AppModal = ({ active, content, close, add }) => {
  const classes = useStyles()
  const image = content.image_url || 'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg'

  return (
    <>
      <Modal
        aria-labelledby='beer-modal-title'
        aria-describedby='beer-modal-description'
        className={classes.modal}
        open={active}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: 'initial',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)'
          }
        }}
      >
        <Fade in={active}>
          <div className={classes.content}>
            <Button className={classes.close} variant='contained' color='secondary' onClick={close}>Close</Button>
            <Grid container direction='row'>
              <Grid item xs={8}>
                <Typography
                  id='beer-modal-title'
                  variant='h4'
                >
                  {content.name}
                </Typography>
                <Typography
                  id='beer-modal-description'
                  variant='body'
                >
                  {content.description}
                </Typography>
                <ul>
                  {(content.food_pairing || []).map((item, index) => (
                    <li key={`food-${index}`}>
                      <Typography
                        id='beer-modal-description'
                        variant='body1'
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.imageWrapper}>
                  <img src={image} width='auto' height='100' alt={`Beer : ${content.name}`} />
                </div>
                <div className={classes.buttonWrapper}>
                  <Button
                    variant='contained'
                    className={classes.cartButton}
                    onClick={() => add(content)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  active: state => selectActiveModal(state),
  content: state => selectModalContent(state)
})

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeModal()),
  add: item => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppModal)
