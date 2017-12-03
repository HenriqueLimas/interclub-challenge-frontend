import React, { Component } from 'react'
import Card from './Card'
import TransactionList from './TransactionList'

const Container = Card.extend`
  width: 100%;
  height: auto;
`

class MemberDetails extends Component {
  displayTransactions() {
    const { transactions } = this.props

    if (!transactions || !transactions.length) {
      return (
        <h3>No transactions yet</h3>
      )
    }

    return (
      <TransactionList transactions={transactions} />
    )
  }

  render() {
    const { member } = this.props

    return (
      <Container hover={false}>
        <h1>{`${member.first_name} ${member.last_name}`}</h1>
        {this.displayTransactions()}
      </Container>
    )
  }
}

export default MemberDetails