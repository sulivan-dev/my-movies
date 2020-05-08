import { combineReducers } from "redux";
import test from './testReducer';
import premieres from './premiereReducer';
import upcoming from './upcomingReducer';
import credits from './creditReducer';
import details from './detailReducer';

export default combineReducers({
  test,
  premieres,
  upcoming,
  credits,
  details,
})
