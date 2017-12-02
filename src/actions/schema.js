import { Schema, arrayOf } from 'normalizr'

export const member = new Schema('members')
export const arrayOfMembers = arrayOf(todo)