import React from 'react';
import styled from 'styled-components';

const FormTitle = styled.div`
background-color: #ff323c;
color: white;
text-align: left;
align-items: center;
justify-content: center 
width: 100%;
height: 60px;
fontSize: 40px;
`;

const Title = styled.h1`
font-family: ${props => props.theme.heroFont}
margin: 0;
font-size: 29px;
padding-left: 10px;`;

export default ({ username }) => (
  <FormTitle>
    <Title>Hey { username }!</Title>
  </FormTitle>
)
