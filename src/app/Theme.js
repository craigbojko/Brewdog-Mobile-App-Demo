import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'

let theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: red
  },
  status: {
    danger: 'orange'
  }
})

theme = responsiveFontSizes(theme)

export default theme
