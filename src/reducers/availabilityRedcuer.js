const INIT = {
  AvailableDays: null
}

export default (state = INIT, { type, AvailableDays }) => {
  switch (type) {

  case 'SET_AVAILABLE_DAYS':
    return {
      ...state,
      AvailableDays,
    };

  default:
    return state;
  }
};
