import styled from 'styled-components';

const AppWrapper = styled.div`
font-family: ${props => props.theme.heroFont}
  background-color: #6A6464;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
`;

export default AppWrapper;
