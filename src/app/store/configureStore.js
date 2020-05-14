import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router/immutable'
import createStorybookListener from 'storybook-addon-redux-listener'

import { fromJS } from 'immutable'

import rootReducer from './reducers/root'
import rootEpic from './epics/root'

const configureStore = (initialState = {}, history) => {
  const epicMiddleware = createEpicMiddleware()

  const middleware = [
    epicMiddleware,
    routerMiddleware(history)
  ]
  if (process.env.NODE_ENV === 'storybook') {
    const reduxListener = createStorybookListener()
    middleware.push(reduxListener)
  }

  const enhancers = [
    applyMiddleware(...middleware)
  ]

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false
    })
    : compose
    /* eslint-enable */

  const store = createStore(
    rootReducer(history),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
