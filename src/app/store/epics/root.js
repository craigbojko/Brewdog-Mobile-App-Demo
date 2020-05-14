import { combineEpics } from 'redux-observable'

import * as beers from './beer.epic'

export default combineEpics(...Object.values({
  ...beers
}))
