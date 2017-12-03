import React from 'react'

const TransactionList = ({ transactions }) => (
  <ul>
    { transactions.map(transaction => (
      <li key={transaction.id}>
        {transaction.amount} - {transaction.type}
      </li>
    ))}
  </ul>
)

export default TransactionList