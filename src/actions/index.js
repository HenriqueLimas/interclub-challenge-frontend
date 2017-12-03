import { normalize } from 'normalizr'
import * as schema from './schema'
import { getIsFetching, getIsFetchingTransactions } from '../reducers'
import * as actionTypes from './actionTypes'

const createFetchAction = ({ actionTypes, schema, getApi, getIsFetching }) => (...apiArgs) => (dispatch, getState, api) => {
  if (getIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch({
    type: actionTypes.REQUEST,
  })

  return getApi(api)(...apiArgs).then(
    response => {
      dispatch({
        type: actionTypes.SUCCESS,
        response: normalize(response, schema),
      })
    },
    error => {
      dispatch({
        type: actionTypes.FAILURE,
        message: error.message || 'Something went wrong.'
      })
    }
  )
}

export const fetchMembers = createFetchAction({
  actionTypes: actionTypes.members,
  schema: schema.arrayOfMembers,
  getApi: api => api.fetchMembers,
  getIsFetching,
})

export const fetchMembersTransactions = createFetchAction({
  actionTypes: actionTypes.transactions,
  schema: schema.arrayOfTransactions,
  getApi: api => api.fetchMembersTransactions,
  getIsFetching: getIsFetchingTransactions,
})