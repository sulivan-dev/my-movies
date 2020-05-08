import type from '../actions/type';

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DETAILS_MOVIES_FULFILLED:
      const { data } = action.payload;

      return Object.assign({}, state, {
        data,
      });
    default:
      return state;
  }
}
