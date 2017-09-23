import API from '../api';
import { store } from '../store/configureStore';
import { push } from 'react-router-redux';


export const setServices = service => ({
  type: 'SET_SERVICE',
  service,
});

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

export const setAvailableDays = AvailableDays => ({
  type: 'SET_AVAILABLE_DAYS',
  AvailableDays,
});

export const getAailableDays = (api = API, set = setAvailableDays) => (
  dispatch => (
    api
      .getAailableDays()
      .then((response) => {
        dispatch(set(response.data))
        return response.data
      })
  )
)
