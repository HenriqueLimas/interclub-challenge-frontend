import { combineReducers } from 'redux'

const createList = () => {
  const ids = (state=[], action) => {
    switch (action.type) {
      case 'FETCH_MEMBERS_SUCCESS':
        return action.response.result
      default:
        return state
    }
  }

  const isFetching = (state=false, action) => {
    switch (action.type) {
      case 'FETCH_MEMBERS_REQUEST':
        return true
      case 'FETCH_MEMBERS_SUCCESS':
      case 'FETCH_MEMBERS_FAILURE':
        return false
      default:
        return state
    }
  }

  const errorMessage = (state=null, action) => {
    switch(action.type) {
      case 'FETCH_MEMBERS_FAILURE':
        return action.message
      case 'FETCH_MEMBERS_SUCCESS':
      case 'FETCH_MEMBERS_REQUEST':
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