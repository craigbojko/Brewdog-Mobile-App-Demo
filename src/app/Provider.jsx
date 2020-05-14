import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
const dateFormat = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
}

const ProviderWrapper = ({ children, store }) => (
  <IntlProvider formats={dateFormat} locale='en-GB'>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </Provider>
  </IntlProvider>
)

ProviderWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  store: PropTypes.any.isRequired
}

export default ProviderWrapper
