import React from 'react'
// import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { render } from '@testing-library/react'

import App from './App'
import ProviderWrapper, { history } from './Provider'
import configureStore from './store/configureStore'

const store = configureStore({}, history)

// describe('App', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(
//       <ProviderWrapper store={store}>
//         <App />
//       </ProviderWrapper>,
//       div
//     )
//     ReactDOM.unmountComponentAtNode(div)
//   })
// })

test('checks the page header content', () => {
  const { getByText } = render(
    <ProviderWrapper store={store}>
      <App />
    </ProviderWrapper>
  )
  const linkElement = getByText(/Demo App/i)
  expect(linkElement).toBeInTheDocument()
})
