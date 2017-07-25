import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  font-family: ${props => props.theme.everydayFont}
  width: 150px;
  text-align: center;
  flex-basis: 0;
  color: white;
  font-weight: bold;
  @media (max-width: 540px) {
    display: none;
}
`;


export default ({name}) => <Div>{name}</Div>;
