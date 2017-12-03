import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Card from './Card'

const StyledName = styled.h2`
    text-align: center;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:visited {
        color: inherit;
    }
`

const MemberItem = ({ member }) => (
    <StyledLink to={`/members/${member.id}`}>
        <Card>
            <StyledName>
                {member.first_name}&nbsp;{member.last_name}
            </StyledName>
        </Card>
    </StyledLink>
);

export default MemberItem;
