import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 100px;
  font-family: 'Arial';
  height: 100%;
  width: 70%;
  position: relative;
  margin-left: 14px;
  @media screen and (min-width: 732px) {
    margin-left: 250px;
    overflow: visible;
  }

  @media screen and (max-width: 732px) {
    overflow: visible;
    width: 100%;
  }
`;

export const ContentTopic = styled.div`
  margin-top: 100px;
  font-family: 'Arial';
  height: 100%;
  width: 70%;
  position: relative;
  @media screen and (min-width: 732px) {
    margin-left: 15%;
    overflow: visible;
  }

  @media screen and (max-width: 732px) {
    overflow: visible;
    width: 100%;
  }
`;
