import styled from 'styled-components';

const styles = styled.div`
  background-color: black;
  border-radius: 5px;
  color: #ffffff;

  display: block;
  font-family: ${props => props.theme.heroFont}
  height: 500px;
  width: 350px;
`;

export default styles;
