const createById = name => {
  const byId = (state={}, action) => {
    if (action.response) {
      return {
        ...state,
        ...action.response.entities[name],
      }
    }
    return state
  }

  const getState = state => id => state[id]

  return {
    reducer: byId,
    getter: getState,
  }
}

export default createById

