import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Tab } from '@material-ui/core'

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    textTransform: 'none',
    opacity: 1,
    fontWeight: 400,
    '&$selected': {
      fontWeight: 700,
    }
  }
})

const SubNavigationTab = withStyles(styles, { withTheme: true })(
  (props) => <Tab disableRipple {...props} />
)

export default SubNavigationTab
