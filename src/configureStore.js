import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import membersApp from './reducers'
import * as api from './api'

const configureStore = () => {
  return createStore(
    membersApp,
    applyMiddleware(thunk.withExtraArgument(api))
  )
}

export default configureStore