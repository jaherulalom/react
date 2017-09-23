const INIT = {
  service: null
}

export default (state = INIT, { type, service }) => {
  switch (type) {

  case 'SET_SERVICE':
    return {
      ...state,
      service,
    };

  default:
    return state;
  }
};
