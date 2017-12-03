import { combineReducers } from 'redux'

const createListById = ({ SUCCESS, REQUEST, FAILURE }) => {
  const idsBy = (state={}, action) => {
    switch (action.type) {
      case SUCCESS:
        return {
          ...state,
          [action.id]: action.response.result
        }
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
    idsBy,
    isFetching,
    errorMessage,
  })
}

export default createListById

export const getIds = (state, id) => state.idsBy[id] || []
export const getIsFetching = state => state.isFetching
export const getErrorMessage = state => state.errorMessage