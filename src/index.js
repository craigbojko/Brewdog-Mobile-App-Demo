import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import ProviderWrapper, { history } from './app/Provider'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import App from './app/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './app/store/configureStore'

const store = configureStore({}, history)
const MOUNT_POINT = document.getElementById('root')

const provider = (
  <ProviderWrapper store={store}>
    <App />
  </ProviderWrapper>
)

ReactDOM.render(provider, MOUNT_POINT)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
