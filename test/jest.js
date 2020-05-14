import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React from 'react'
import PropTypes from 'prop-types'
import sinon from 'sinon'

import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.CI = 'true'

registerRequireContextHook()

global.React = React
global.PropTypes = PropTypes

global.sinon = sinon

global.externalLibrary = {
  logError: (err) => {
    console.log(err)
  }
}

global._console = console
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  group: jest.fn(),
  groupCollapsed: jest.fn(),
  groupEnd: jest.fn(),
  warn: jest.fn(),
  error: global._console.error
}
