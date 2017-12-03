import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import transactionsById, * as fromTransactionsById from './transactionsById'
import createList, * as fromList from './createList'
import createListById, * as fromListById from './createListById'
import * as actionTypes from '../actions/actionTypes'

const members = combineReducers({
  byId,
  transactionsById,
  list: createList(actionTypes.members),
  member: createList(actionTypes.member),
  transactions: createListById(actionTypes.transactions),
})

export default members

export const getVisibleMembers = state => {
  const ids = fromList.getIds(state.list)
  return ids.map(fromById.getMember(state.byId))
}

export const getVisibleTransactions = (state, memberId) => {
  const ids = fromListById.getIds(state.transactions, memberId)
  return ids.map(fromTransactionsById.getTransaction(state.transactionsById))
}

export const getVisibleMember = (state, memberId) =>
  fromById.getMember(state.byId)(memberId)

export const getIsFetching = state =>
  fromList.getIsFetching(state.list)

export const getIsFetchingMember = state =>
  fromList.getIsFetching(state.member)

export const getIsFetchingTransactions = state =>
  fromList.getIsFetching(state.transactions)

export const getErrorMessage = state =>
  fromList.getErrorMessage(state.list)