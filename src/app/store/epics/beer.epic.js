/* eslint-disable import/prefer-default-export */

import { of } from 'rxjs'
import { ofType } from 'redux-observable'
import {
  mergeMap,
  catchError
} from 'rxjs/operators'

import * as constants from '../constants'

import {
  fetchBeers,
  fetchBeersByType
} from '../../services/punk.service'

const handleError = type => error => of({
  type,
  error: error.message
})

export const getBeersEpic = actions$ => actions$
  .pipe(
    ofType(constants.GET_BEERS),
    mergeMap(() => fetchBeers()
      .pipe(
        mergeMap(response => [{
          type: constants.GET_BEERS_SUCCESS,
          payload: response
        }])
      )
    ),
    catchError(handleError(constants.GET_BEERS_FAILURE))
  )

export const getBeersByTypeEpic = actions$ => actions$
  .pipe(
    ofType(constants.GET_BEERS_BY_TYPE),
    mergeMap(action => fetchBeersByType(action.beerType)
      .pipe(
        mergeMap(response => [{
          type: constants.GET_BEERS_BY_TYPE_SUCCESS,
          beerType: action.beerType,
          payload: response
        }])
      )
    ),
    catchError(handleError(constants.GET_BEERS_BY_TYPE_FAILURE))
  )
