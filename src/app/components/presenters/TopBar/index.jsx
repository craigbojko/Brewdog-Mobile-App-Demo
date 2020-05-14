import React from 'react'
import { AppBar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    ...theme.typography.h5,
    height: 60,
    backgroundColor: theme.palette.secondary[500],
    boxShadow: theme.shadows[0],
    color: theme.palette.common.white
  }
})

export const TopBar = withStyles(styles, { withTheme: true })(
  (props) => <AppBar {...props}>{props.children}</AppBar>
)

export default TopBar
