import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${props => props.theme.heroFont}
  color: ${props => props.theme.black}
  font-size: 36px
`;

export const SmlTitle = styled.h3`
  font-family: ${props => props.theme.heroFont}
  color: ${props => props.theme.red}
  margin-top: -5px;
  margin-bottom: 0;
  font-size: 22px;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.everydayFont}
  margin: 0

`;

export const CenterText = styled.p`
  font-family: ${props => props.theme.everydayFont}
  margin: 5px;
  text-align: center;
`;
