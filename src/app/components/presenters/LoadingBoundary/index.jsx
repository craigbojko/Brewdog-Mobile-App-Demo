import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

export const LoadingBoundary = (props) => {
  const { isLoading, children } = props
  if (!isLoading) return children

  return (
    <>
      <div style={{ minHeight: '550px' }}>
        <CircularProgress color='secondary' />
      </div>
    </>
  )
}

LoadingBoundary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired
}

export default LoadingBoundary
