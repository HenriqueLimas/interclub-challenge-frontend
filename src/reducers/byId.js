import createById from './createById'

const byId = createById('members')

export default byId.reducer

export const getMember = byId.getter
