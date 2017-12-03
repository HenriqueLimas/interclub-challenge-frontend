import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import membersApp from './reducers'
import * as api from './api'

const configureStore = () => {
  return createStore(
    membersApp,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  )
}

export default configureStore