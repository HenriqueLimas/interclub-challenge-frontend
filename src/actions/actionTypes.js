const createAsyncActionTypes = actionType => ({
  SUCCESS: actionType + '_SUCCESS',
  REQUEST: actionType + '_REQUEST',
  FAILURE: actionType + '_FAILURE',
})

export const members = createAsyncActionTypes('FETCH_MEMBERS')
export const transactions = createAsyncActionTypes('FETCH_MEMBER_TRANSACTIONS')