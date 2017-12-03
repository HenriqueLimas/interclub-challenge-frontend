import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  getVisibleMember,
  getIsFetchingMember,
  getVisibleTransactions,
  getIsFetchingTransactions,
  getVisibleTransactionsGraph,
  getIsFetchingTransactionsGraph
} from '../reducers'

import Loading from './Loading'
import MemberDetails from './MemberDetails'

export class VisibleMemberDetails extends Component {
  componentDidMount() {
    this.fetchMember()
    this.fetchTransactions()
    this.fetchTransactionsGraph()
  }

  fetchMember() {
    const { memberId, fetchMember } = this.props

    fetchMember(memberId)
  }

  fetchTransactions() {
    const { memberId, fetchMemberTransactions } = this.props

    fetchMemberTransactions(memberId)
  }

  fetchTransactionsGraph() {
    const { memberId, fetchMemberTransactionsGraph } = this.props

    fetchMemberTransactionsGraph(memberId)
  }

  render() {
    const { isFetching, member, transactions, graphData } = this.props

    if (isFetching || !member) {
      return <Loading isLoading={isFetching} />

    }

    return (
      <MemberDetails
        member={member}
        graphData={graphData}
        transactions={transactions}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params }}) => ({
  isFetching: getIsFetchingMember(state) || getIsFetchingTransactions(state),
  member: getVisibleMember(state, params.id),
  memberId: params.id,
  transactions: getVisibleTransactions(state, params.id),
  graphData: getVisibleTransactionsGraph(state, params.id),
})

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleMemberDetails))