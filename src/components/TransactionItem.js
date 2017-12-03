import React from 'react'
import styled from 'styled-components'
import { Money, Date } from 'react-format'

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  width: 100%;
  list-style: none;
  height: 50px;
  border-top: 1px solid rgba(0,0,0,.1);
  margin: 0;
`

const StyledMoney = styled(Money)`
  color: ${({ type }) => type === 'income' ? 'green' : 'red'}
`

const TransactionItem = ({ transaction }) => (
  <StyledItem>
    <Date locale='de-DE'>{transaction.date}</Date>

    <div style={{color: transaction.type === 'income' ? 'green' : 'red' }}>
      <Money
        locale='de-DE'
        currency='EUR'
        >{transaction.amount}</Money>
    </div>
  </StyledItem>
)

export default TransactionItem