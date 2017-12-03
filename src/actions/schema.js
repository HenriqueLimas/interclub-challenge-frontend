import { schema } from 'normalizr'

export const member = new schema.Entity('members')
export const arrayOfMembers = [member]

export const transaction = new schema.Entity('transactions')
export const arrayOfTransactions = [transaction]