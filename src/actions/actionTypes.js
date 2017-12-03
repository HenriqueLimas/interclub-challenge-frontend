const createAsyncActionTypes = actionType => ({
  SUCCESS: actionType + '_SUCCESS',
  REQUEST: actionType + '_REQUEST',
  FAILURE: actionType + '_FAILURE',
})

export const member = createAsyncActionTypes('FETCH_MEMBER')
export const members = createAsyncActionTypes('FETCH_MEMBERS')
export const transactions = createAsyncActionTypes('FETCH_MEMBER_TRANSACTIONS')
export const transactionsGraph = createAsyncActionTypes('FETCH_MEMBER_TRANSACTIONS_GRAPH')