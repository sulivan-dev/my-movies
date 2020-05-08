import type from '../actions/type';

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PREMIER_MOVIES_FULFILLED:
      return Object.assign({}, state, {
        data: action.payload.data.results,
      });
    default:
      return state;
  }
}
