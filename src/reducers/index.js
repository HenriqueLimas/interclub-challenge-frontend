import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const members = combineReducers({
  byId,
  list: createList(),
})

export default members

export const getVisibleMembers = state => {
  const ids = fromList.getIds(state.list)
  return ids.map(fromById.getMember(state.byId))
}

export const getIsFetching = state =>
  fromList.getIsFetching(state.list)

export const getErrorMessage = state =>
  fromList.getErrorMessage(state.list)