import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


import userReducer from '../reducers/userReducer';

export const history = createHistory();

const middleware = routerMiddleware(history);

const reducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  user: userReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(middleware, thunk)),
);
