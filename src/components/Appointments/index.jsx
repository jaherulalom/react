import React from 'react';
import Button from '../common/Button';
import moment from 'moment';
import { connect } from 'react-redux';
import { getAailableDays } from '../../actions/serviceActions';

class Appointments extends React.Component {

  componentWillMount() {
    this.props.getAailableDays();
  }

  render() {
    console.log(this.props.AvailableDays);
    return (
      <div>
      <p>Your next appointment is on (customer_appt_date_time)</p>
      <p>The next available appointment is {this.props && this.props.AvailableDays && this.props.AvailableDays[1].booking_datetime}</p>
      <Button>Book this now</Button>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  AvailableDays: state.AvailableDays.AvailableDays
});

const mapDispatchToProps = {
  getAailableDays,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointments);
