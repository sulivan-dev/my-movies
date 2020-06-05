import type from './type';
import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/movie`;
const BASE_URL_SEARCH = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_KEY;
const LANGUAGE = process.env.REACT_APP_LANGUAGE;

export const getPremieres = () => dispatch => {
  dispatch ({
    type: type.GET_PREMIER_MOVIES,
    payload: axios.get(`${BASE_URL}/now_playing?api_key=${KEY}&language=${LANGUAGE}`)
  })
}

export const getUpcoming = () => dispatch => {
  dispatch ({
    type: type.GET_UPCOMING_MOVIES,
    payload: axios.get(`${BASE_URL}/upcoming?api_key=${KEY}&language=${LANGUAGE}`)
  })
}

export const getCredits = (movieId) => dispatch => {
  dispatch ({
    type: type.GET_CREDITS_MOVIES,
    payload: axios.get(`${BASE_URL}/${movieId}/credits?api_key=${KEY}&language=${LANGUAGE}`)
  })
}

export const getDetails = (movieId) => dispatch => {
  dispatch ({
    type: type.GET_DETAILS_MOVIES,
    payload: axios.get(`${BASE_URL}/${movieId}?api_key=${KEY}&language=${LANGUAGE}`)
  })
}

export const getSearch = (queryStrings) => dispatch => {
  dispatch ({
    type: type.SEARCH_MOVIES,
    payload: axios.get(`${BASE_URL_SEARCH}/search/movie?query=${queryStrings}&api_key=${KEY}&language=${LANGUAGE}`)
  })
}

export const clearSearch = () => {
    return {
      type: type.CLEAR_SEARCH_MOVIES,
    }
}
