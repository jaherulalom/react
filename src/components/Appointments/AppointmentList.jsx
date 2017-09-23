import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { redirect } from '../../actions/routeActions';
import { getAailableDays } from '../../actions/serviceActions';


export class AppointmentList extends React.Component {

componentWillMount() {
  this.props.getAailableDays();
}

onClick = (service) => (
  () => {

    this.props.redirect(`/confirm`)
  }
)

  render() {

    const dates = this.props && this.props.AvailableDays && this.props.AvailableDays.map((AvailableDays, index) => (
                  <p key={index} onClick={this.onClick()}>{moment(AvailableDays.booking_datetime).format("LLLL")}</p>
              ))

    return (
      <div>
          {dates}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  AvailableDays: state.AvailableDays.AvailableDays
});

const mapDispatchToProps = {
  getAailableDays,
  redirect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentList);
