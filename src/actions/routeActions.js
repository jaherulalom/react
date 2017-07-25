import { push } from 'react-router-redux';

export const redirect = (route, goTo = push) => (
  dispatch => (
    dispatch(goTo(route))
  )
);

