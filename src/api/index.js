import axios from 'axios'

const API_BASE = 'http://localhost:4000/api'

const extractData = response => response.data

export const fetchMembers = () =>
  axios.get(`${API_BASE}/members`)
    .then(extractData)

export const fetchMember = id =>
  axios.get(`${API_BASE}/members/${id}`)
    .then(extractData)

export const fetchMemberTransactions = id =>
  axios.get(`${API_BASE}/members/${id}/transactions`)
    .then(extractData)
