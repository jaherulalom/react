const INIT = {
  user: null
}

export default (state = INIT, { type, ...data }) => {
  switch (type) {

  case 'LOGIN_SUCCESS':
    return {
      ...state,
      ...data,
      user: {
        ...data.user,
      }
    };

  case 'REGISTRATION_SUCCESS':
    return{
      ...state,
      user:{
        ...state.user,
        ...data
      }
    };

  default:
    return state;
  }
};
