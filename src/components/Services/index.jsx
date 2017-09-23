import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { redirect } from '../../actions/routeActions';
import { Content } from '../../components/common/Content/Content';
import { getServices } from '../../actions/serviceActions';
import serviceList from './serviceList';


import Header from '../Header/Header';

export class Services extends React.Component {

  componentWillMount() {
    this.props.getServices();
  }

  onClick = (service) => (
    () => {
       this.props.redirect(`/bookings/appointment`)
    }
  )

  render() {
    return (
      <Content>
        <h3>Select a service from below</h3>
      <div>
      {this.props && this.props.service && this.props.service.map((service, index) => (
          <p key={index} onClick={this.onClick()}>Service Name: {service.package_name}, Service Price: {service.package_price}, Service Price: {service.package_price}</p>
      ))}
      </div>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  service: state.service.service,
});

const mapDispatchToProps = {
  getServices,
  redirect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Services);
