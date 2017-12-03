import React from 'react'
import styled from 'styled-components'
import TransactionItem from './TransactionItem'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
`

const TransactionList = ({ transactions }) => (
  <StyledList>
    { transactions.map(transaction => (
      <TransactionItem
        key={transaction.id}
        transaction={transaction}
      />
    ))}
  </StyledList>
)

export default TransactionList