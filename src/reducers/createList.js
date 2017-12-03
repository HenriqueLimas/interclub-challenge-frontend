import { combineReducers } from 'redux'

const createList = ({ SUCCESS, REQUEST, FAILURE }) => {
  const ids = (state=[], action) => {
    switch (action.type) {
      case SUCCESS:
        return action.response.result
      default:
        return state
    }
  }

  const isFetching = (state=false, action) => {
    switch (action.type) {
      case REQUEST:
        return true
      case SUCCESS:
      case FAILURE:
        return false
      default:
        return state
    }
  }

  const errorMessage = (state=null, action) => {
    switch(action.type) {
      case FAILURE:
        return action.message
      case SUCCESS:
      case REQUEST:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
}

export default createList

export const getIds = state => state.ids
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage