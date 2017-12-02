import { normalize } from 'normalizr'
import * as schema from './schema'
import { getIsFetching } from '../reducers'

export const fetchMembers = () => (dispatch, getStore, api) => {
  if (getIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch({
    type: 'FETCH_MEMBERS_REQUEST',
  })

  return api.fetchMembers().then(
    response => {
      dispatch({
        type: 'FETCH_MEMBERS_SUCCESS',
        reponse: normalize(response, schema.arrayOfMembers),
      })
    },
    error => {
      dispatch({
        type: 'FETCH_MEMBERS_FAILURE',
        message: error.message || 'Something went wrong.'
      })
    }
  )
}