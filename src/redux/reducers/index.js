import { combineReducers } from "redux";
import test from './testReducer';
import premieres from './premiereReducer';
import upcoming from './upcomingReducer';

export default combineReducers({
  test,
  premieres,
  upcoming,
})
