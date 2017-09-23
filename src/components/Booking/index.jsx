import React from 'react';
import { Content } from '../../components/common/Content/Content';
import Services from '../../components/Services/index';
import Header from '../Header/Header';

class Booking extends React.Component {

  render() {
    return (
      <Content>
        <Header />
        <Services />
      </Content>
    );
  }

}

export default Booking;
