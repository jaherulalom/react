import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';


const Div = styled.div`
@media (max-width: 260px) {
  display: none;
}
  `;

export default ({ username, backgroundColor }) => (
  <Div>
    <Avatar
      color="white"
      backgroundColor={backgroundColor}
      size={35}
      style={{ margin: 10, flexBasis: 'auto' }}
    >
      {username && username.charAt(0).toUpperCase()}
    </Avatar>
  </Div>
);
