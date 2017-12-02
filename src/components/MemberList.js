import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MemberItem from './MemberItem'

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 50px calc((100vw - 860px) / 2);
    justify-content: space-between;
`

const MemberList = ({ members }) => (
  <StyledWrapper>
    {members.map(member =>
      <MemberItem
        key={member.id}
        member={member}
      />
    )}
  </StyledWrapper>
)

MemberList.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }))
}

export default MemberList