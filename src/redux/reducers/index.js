import { combineReducers } from "redux";
import test from './testReducer';
import premieres from './premiereReducer';

export default combineReducers({
  test,
  premieres,
})
