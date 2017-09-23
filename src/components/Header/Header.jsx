import React from 'react';
import { HeaderDiv } from './HeaderDiv';
import { Title } from '../common/Text';

class Header extends React.Component {

  render() {
    return (
      <HeaderDiv>
        <Title>Scissors & Combs</Title>
      </HeaderDiv>
    );
  }

}

export default Header;
