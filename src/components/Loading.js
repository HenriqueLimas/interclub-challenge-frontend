import styled from 'styled-components'

const Loading = styled.div`
  ${props => props.isLoading && `
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all  1s ease-out;

    &:before {
      content: 'Loading...';
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`

export default Loading