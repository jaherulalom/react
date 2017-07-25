import API from '../api';
import { store } from '../store/configureStore';
import { push } from 'react-router-redux';

export const success = data => ({
  type: 'LOGIN_SUCCESS',
  ...data,
});

export const setServices = service => ({
  type: 'SET_DOMAIN',
  service,
});

const setSession = data => {
 localStorage.setItem('user-session-booking', JSON.stringify(data));
};

export const getSession = () => (
dispatch => {
  const session = localStorage.getItem('user-session-booking');
  session ? dispatch(success(JSON.parse(session))) : dispatch(push('/login'));
});

export const submit = (values, api = API, Success = success) => (
  dispatch => (
    api
      .loginUser(values)
      .then(({data}) => {
        dispatch(Success(data))
        if (!data.user.registrationCompleted) {
          dispatch(push('/register'));
        } else {
          setSession(data)
          dispatch(push('/'));
        }
      })

  )
);

export const getServices = (api = API, set = setServices) => (
  dispatch => (
    api
      .getService()
      .then((response) => {
        dispatch(set(response.data))
        return response.data
      })
  )
)
