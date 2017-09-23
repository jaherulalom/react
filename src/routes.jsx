import React from 'react';
import { Route, Switch } from 'react-router';

import Domain from './components/Domain/index';
import Login from './components/Login/index';
import Booking from './components/Booking/index';
import Appointments from './components/Appointments/AppointmentList';
import Confirmation from './components/Confirm/index';

export default () => (
  <Switch>
    <Route path="/confirm" exact component={Confirmation} />
    <Route path="/:bookings/:appointment" exact component={Appointments} />
    <Route path="/bookings" exact component={Booking} />
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={Domain} />
    <Route component={null} /> {/* catch-all error page */}
  </Switch>
);
