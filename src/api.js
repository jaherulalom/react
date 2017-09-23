import Axios from 'axios';

import { store } from './store/configureStore';

const API_ENDPOINT = '%%API_ENDPOINT%%';
const ENVIRONMENT = '%%ENVIRONMENT%%';

/* eslint-disable */
if (ENVIRONMENT === 'test') require('../test/apiHelper');
/* eslint-enable */


Axios.defaults.baseURL = API_ENDPOINT;
Axios.defaults.timeout = 1000;

Axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const API = ((axios, state) => {

  // const setHeadersWithUserInfo = (userData, axios) => (
  //   axios.create({
  //     headers: {
  //
  //     },
  //   })
  // );

  return {
    loginUser: userDetails => (
      axios
        .post('/userlogin', userDetails)
    ),
    getService: domain => (
      axios
        .get('/api/get-available-packages')
    ),
    getAailableDays: AvailableDays => (
      axios
        .get('/api/get-available-days')
    ),
  };
});

export default API(Axios, store.getState);
