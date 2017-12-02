import { schema } from 'normalizr'

export const member = new schema.Entity('members')
export const arrayOfMembers = [member]