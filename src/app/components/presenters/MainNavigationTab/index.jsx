import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Tab } from '@material-ui/core'

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    textTransform: 'none',
    opacity: 1,
    zIndex: 1
  }
})

const MainNavigationTab = withStyles(styles, { withTheme: true })(
  (props) => <Tab disableRipple {...props} />
)

export default MainNavigationTab
