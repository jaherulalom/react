import React from 'react';
import { Route, Switch } from 'react-router';

import Domain from './components/Domain/index';
import Login from './components/Login/index';

export default () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/" exact component={Domain} />
    <Route component={null} /> {/* catch-all error page */}
  </Switch>
);
