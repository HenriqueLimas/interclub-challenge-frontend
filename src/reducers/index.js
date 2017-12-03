import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'
import * as actionTypes from '../actions/actionTypes'

const members = combineReducers({
  byId,
  list: createList(actionTypes.members),
  transactions: createList(actionTypes.transactions),
})

export default members

export const getVisibleMembers = state => {
  const ids = fromList.getIds(state.list)
  return ids.map(fromById.getMember(state.byId))
}

export const getIsFetching = state =>
  fromList.getIsFetching(state.list)

export const getIsFetchingTransactions = state =>
  fromList.getIsFetching(state.transactions)

export const getErrorMessage = state =>
  fromList.getErrorMessage(state.list)