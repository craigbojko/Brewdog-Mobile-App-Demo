import { Observable, Subscriber } from 'rxjs'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { fetchBeers } from '../punk.service'

import * as mockData from '../__mocks__/punk.data.json'

describe('Integration: Punk Service', () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios)
    mock.onGet(/.*\/beers/).reply(200, mockData)
  })

  it('check beer details response', (done) => {
    const id = 1
    const punkResponse$ = fetchBeers()

    punkResponse$.subscribe((response) => {
      expect(response[0]).toHaveProperty('id')
      expect(response[0].id).toEqual(id)
      done()
    })

    expect(punkResponse$).toBeInstanceOf(Observable)
    expect(punkResponse$).toHaveProperty('subscribe')
    expect(punkResponse$.subscribe()).toBeInstanceOf(Subscriber)
  })
})
