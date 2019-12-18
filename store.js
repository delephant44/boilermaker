import { createStore, applyMiddleware } from 'redux';
import someReducer from './reducer'; //
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  someReducer, //
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;