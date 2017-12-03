import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import {
  getVisibleMember,
  getIsFetchingMember,
  getVisibleTransactions,
  getIsFetchingTransactions
} from '../reducers'

import MemberDetails from './MemberDetails'

export class VisibleMemberDetails extends Component {
  componentDidMount() {
    this.fetchMember()
    this.fetchTransactions()
  }

  fetchMember() {
    const { memberId, fetchMember } = this.props

    fetchMember(memberId)
  }

  fetchTransactions() {
    const { memberId, fetchMemberTransactions } = this.props

    fetchMemberTransactions(memberId)
  }

  render() {
    const { isFetching, member, transactions } = this.props

    if (isFetching || !member) {
      return <p>Loading</p>
    }

    return (
      <MemberDetails
        member={member}
        transactions={transactions} />
    )
  }
}

const mapStateToProps = (state, { match: { params }}) => ({
  isFetching: getIsFetchingMember(state) || getIsFetchingTransactions(state),
  member: getVisibleMember(state, params.id),
  memberId: params.id,
  transactions: getVisibleTransactions(state, params.id),
})

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleMemberDetails))