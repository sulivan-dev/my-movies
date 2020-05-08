import type from '../actions/type';

const initialState = {
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PREMIER_MOVIES_FULFILLED:
      const { results } = action.payload.data;
      const featureMovie = results[Math.floor(Math.random() * results.length)];

      return Object.assign({}, state, {
        data: results,
        featureMovie: featureMovie
      });
    default:
      return state;
  }
}
