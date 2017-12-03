import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
}  from 'recharts'

const TransactionGraph = ({ transactions }) => (
  <BarChart width={600} height={300} data={transactions}>
    <XAxis dataKey="date"/>
    <YAxis />
    <CartesianGrid strokeDasharray="3 3"/>
    <Bar dataKey='amount' fill="#8884d8" />
  </BarChart>
)

export default TransactionGraph