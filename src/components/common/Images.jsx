import React from 'react';

import styled from 'styled-components';


const Image = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  width: 60%;
`;

export const UserImage = styled.img`

  border-radius: 100%;
  border-style: solid;
  border-color: grey;
`;


const StyledHeaderUserImage = styled(UserImage)`
  height: 80%;
  width: auto;
`;

export const HeaderUserImage = () => <StyledHeaderUserImage src={UserPic} />

export default Image;
