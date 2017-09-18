import {
  createStore,
  applyMiddleware
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/'

const middlewares = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, middlewares)

export default store