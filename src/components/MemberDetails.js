import React, { Component } from 'react'
import Card from './Card'
import TransactionList from './TransactionList'
import TransactionGraph from './TransactionGraph'

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

  displayGraph() {
    const { transactions } = this.props

    if (!transactions || !transactions.length) {
      return null
    }

    return (
      <TransactionGraph transactions={transactions} />
    )
  }

  render() {
    const { member } = this.props

    return (
      <Container hover={false}>
        <h1>{`${member.first_name} ${member.last_name}`}</h1>
        {this.displayTransactions()}
        {this.displayGraph()}
      </Container>
    )
  }
}

export default MemberDetails