import { normalize } from 'normalizr'
import * as schema from './schema'
import * as actionTypes from './actionTypes'
import {
  getIsFetching,
  getIsFetchingTransactions,
  getIsFetchingTransactionsGraph
} from '../reducers'

const createFetchAction = ({ actionTypes, schema, getApi, getIsFetching, mapResponse=normalize }) => (...apiArgs) => (dispatch, getState, api) => {
  if (getIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch({
    type: actionTypes.REQUEST,
  })

  return getApi(api)(...apiArgs).then(
    response => {
      dispatch({
        id: apiArgs[0] || null,
        type: actionTypes.SUCCESS,
        response: mapResponse(response, schema),
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

export const fetchMember = createFetchAction({
  actionTypes: actionTypes.member,
  schema: schema.member,
  getApi: api => api.fetchMember,
  getIsFetching,
})

export const fetchMemberTransactions = createFetchAction({
  actionTypes: actionTypes.transactions,
  schema: schema.arrayOfTransactions,
  getApi: api => api.fetchMemberTransactions,
  getIsFetching: getIsFetchingTransactions,
})

export const fetchMemberTransactionsGraph = createFetchAction({
  actionTypes: actionTypes.transactionsGraph,
  getApi: api => api.fetchMemberTransactionsGraph,
  getIsFetching: getIsFetchingTransactionsGraph,
  mapResponse: response => {
    let { income, expense } = response

    const addToMonth = type => (months, item) => {
      const { year, month } = item._id
      const date = `${month}/${year}`
      const sort = (year * 100) + month
      months[date] = months[date] || {}

      months[date] = {
        income: 0,
        expense: 0,
        ...months[date],
        sort,
        date,
        [type]: item.count,
      }

      return months
    }

    let months = income.reduce(addToMonth('income'), {})
    months = expense.reduce(addToMonth('expense'), months)

    return Object.values(months)
      .sort((a, b) => {
        if (a.sort > b.sort) {
          return 1
        }

        if (a.sort < b.sort) {
          return -1
        }

        return 0
      })
  }
})