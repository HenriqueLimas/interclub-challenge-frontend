import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Card from './Card'
import TransactionList from './TransactionList'
import TransactionGraph from './TransactionGraph'

const Container = Card.extend`
  width: 100%;
  height: auto;
`

const Header = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`

const BackButton = styled(Link)`
  position: absolute;
  top: 28px;
  left: 15px;
  text-decoration: none;
  color: inherit;
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
    const { graphData } = this.props

    if (!graphData) {
      return null
    }

    const Container = styled.div`
      margin-top: 20px;
      text-align: center;
    `

    return (
      <Container>
        <h3>Changes</h3>
        <TransactionGraph data={graphData} />
      </Container>
    )
  }

  render() {
    const { member } = this.props

    return (
      <Container hover={false}>
        <Header>
          <BackButton to="/">Back</BackButton>
          <h1>{`${member.first_name} ${member.last_name}`}</h1>
        </Header>
        {this.displayTransactions()}
        {this.displayGraph()}
      </Container>
    )
  }
}

export default MemberDetails