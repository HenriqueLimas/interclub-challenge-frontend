import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { getVisibleMembers, getErrorMessage, getIsFetching } from '../reducers'
import MemberList from './MemberList'
import Loading from './Loading'


export class VisibleMemberList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    const { fetchMembers } = this.props
    fetchMembers()
  }

  render() {
    const { isFetching, errorMessage, members } = this.props
    if (isFetching && !members.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !members.length) {
      return <p>{errorMessage}</p>
    }

    return (
      <div>
        <Loading isLoading={isFetching} />
        <MemberList
          members={members} />
      </div>
    )
  }
}

VisibleMemberList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  members: PropTypes.array.isRequired,
  fetchMembers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
  members: getVisibleMembers(state),
})

export default connect(
  mapStateToProps,
  actions
)(VisibleMemberList)