const byId = (state={}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.members,
    }
  }
  return state
}

export default byId

export const getMember = state => id => state[id]