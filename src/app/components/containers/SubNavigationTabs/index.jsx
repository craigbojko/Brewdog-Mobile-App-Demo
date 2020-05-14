import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Tabs } from '@material-ui/core'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary[800],
  },
  indicator: {
    display: 'none'
  }
})

const SubNavigationTabs = withStyles(styles, { withTheme: true })(
  (props) => <Tabs {...props} />
)

export default SubNavigationTabs
