import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Tabs } from '@material-ui/core'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary[500],
    '& > div': {
      zIndex: 0
    }
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '100%',
    '& > div': {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary[800],
      borderRadius: '15px 15px 0 0'
    },

    '& > div span.rightSprite::before, & > div span.rightSprite::after': {
      content: '" "',
      position: 'absolute',
      left: '100%',
      bottom: 0,
      width: 15,
      height: 15,
      zIndex: 0
    },
    '& > div span.leftSprite::before, & > div span.leftSprite::after': {
      content: '" "',
      position: 'absolute',
      left: -15,
      bottom: 0,
      width: 15,
      height: 15,
      zIndex: 0
    },
    '& > div span.leftSprite::before, & > div span.rightSprite::before': {
      background: theme.palette.primary[800]
    },
    '& > div span.leftSprite::after, & > div span.rightSprite::after': {
      background: theme.palette.secondary[500]
    },
    '& > div span.leftSprite::after': {
      borderRadius: '0 0 15px 0'
    },
    '& > div span.rightSprite::after': {
      borderRadius: '0 0 0 15px'
    }
  }
})

export const MainNavigationTab = withStyles(styles, { withTheme: true })(
  props => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: (
          <div>
            <span className='leftSprite' />
            <span className='rightSprite' />
          </div>
        )
      }}
    />
  )
)

export default MainNavigationTab
