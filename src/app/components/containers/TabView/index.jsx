import React from 'react'
import { Box } from '@material-ui/core'

export default function TabView (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ overflow: 'hidden' }}>{children}</Box>
      )}
    </div>
  )
}
