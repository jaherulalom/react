import styled from 'styled-components';

export const HeaderDiv = styled.div`
  background-color: lightgrey;
  height: 70px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 3;
  position: fixed;
  margin-top: -99px;
  margin-left: -12px;
`;

export const HeaderUserDetails = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`;
