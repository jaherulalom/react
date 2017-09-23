import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redirect } from '../../actions/routeActions';
import { Content } from '../../components/common/Content/Content';
import  AppWrapper from '../../components/common/Content/AppWrapper';
import Appointments from '../../components/Appointments/index';
import Button from '../../components/common/Button';

import Header from '../Header/Header';

export class Domain extends React.Component {


  onClick = (newLocation) => (
    () => {
      this.props.redirect(`/bookings`)
    }
  )

  render() {
    return (

      <Content>
        <Header />
          <h1>Welcome</h1>
          <Appointments />
          <Button onClick={this.onClick()}>Make a booking</Button>
          <Button>Manage booking</Button>
          <Button>Contact</Button>
      </Content>

    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  redirect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Domain);
