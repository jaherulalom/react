import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${props => props.theme.everydayFont}
  background: ${props => props.login ? '#37b4fd' : '#ff323c'};
  border: none;
  border-radius: 2px;
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  padding: 15px;
  display: block;
  width: 290px;
  outline: none;

  &:active {
    box-shadow: inset 0 0 0 1px #27496d, inset 0 5px 30px #277fb2
  }
`;

export const CommentButton = styled(Button)`
  background: #03A9F5;
  float: right;
  width: 65px;
  height: 26px;
  margin-top: 18px;
  padding: 0px;
  @media (max-width: 420px) {
    margin-top: 11px;
    margin-right: -35px;
    padding: 0px;
    width: 40px;
    height: 30px;
  }
`;


export default Button;
