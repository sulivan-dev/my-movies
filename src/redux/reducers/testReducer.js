import type from '../actions/type';

const initialState = {
  test: "Hello world",
  date: new Date(),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE_DATE:
      return Object.assign({}, state, {
        date: action.payload,
      });
    default:
      return state
  }
}
