import createById from './createById'

const byId = createById('transactions')

export default byId.reducer

export const getTransaction = byId.getter