import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import myReducer from './apis/wiki';

const rootReducer = combineReducers({
  myred: myReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;