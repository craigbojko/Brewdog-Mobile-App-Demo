import { Observable } from 'rxjs'
import AxiosSubscriber from './lib/axiosSubscriber.class'

const PER_PAGE = 9
const BASE_URL = `https://api.punkapi.com/v2/beers?per_page=${PER_PAGE}`

const axios$ = _request => new Observable(observer => new AxiosSubscriber(observer, _request))

const GET_REQUEST = (url) => {
  return {
    url,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export const fetchBeers = (page = 1) => axios$(GET_REQUEST(`${BASE_URL}&page=${page}`))
export const fetchBeersByType = (type, page = 1) => axios$(GET_REQUEST(`${BASE_URL}&page=${page}&food=${type}`))

export default {
  fetchBeers,
  fetchBeersByType
}
