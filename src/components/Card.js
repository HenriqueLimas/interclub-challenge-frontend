import styled from 'styled-components'

const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    width: 220px;
    height: 180px;
    margin: 25px;
    border-radius: 2px;
    box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.1);
    transition: 200ms all ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${ ({ hover=true }) => hover && `
      &:hover {
          cursor: pointer;
          background-color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 2px 3px 5px rgba(0, 0, 0, 0.2);
      }
    `}
`;

export default Card