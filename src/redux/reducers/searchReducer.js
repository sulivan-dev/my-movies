import type from '../actions/type';

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.SEARCH_MOVIES_FULFILLED:
      const { results } = action.payload.data;

      return Object.assign({}, state, {
        data: results,
      });
    case type.CLEAR_SEARCH_MOVIES:
      return Object.assign({}, state, {
        data: [],
      });
    default:
      return state;
  }
}
