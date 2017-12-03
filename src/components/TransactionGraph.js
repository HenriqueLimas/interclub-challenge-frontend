import React from 'react'
import { money } from '../utils'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
}  from 'recharts'

const TransactionGraph = ({ data }) => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="date"/>
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
    <Tooltip formatter={money}/>
    <Legend />
    <Bar dataKey='income' fill="rgb(45, 186, 117)" />
    <Bar dataKey='expense' fill="rgb(241, 76, 82)" />
  </BarChart>
)

export default TransactionGraph