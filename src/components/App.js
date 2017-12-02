import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import VisibleMemberList from './VisibleMemberList'

const StyledWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 100px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #c917a0 0%,#7e57c2 100%);
`;

const StyledLogoLink = styled.a`
  position: absolute;
  z-index: 2;
  top: 50px;
  left: 50px;
  width: 48px;
  height: 48px;
`;

const App = () => (
  <StyledWrapper>
    <StyledLogoLink href='https://interclub.io' target='_blank'>
      <img alt='interclub logo' src='/assets/inv_logo_48x48.png' />
    </StyledLogoLink>
    <Route exact path="/" component={VisibleMemberList} />
  </StyledWrapper>
)

export default App