import type from './type';
import axios from 'axios';

const URL_BASE = 'https://api.themoviedb.org/3/movie';
const KEY = 'a31ebe679ead5ce44960b901d92b8cf1'

export const getPremieres = () => dispatch => {
  dispatch ({
    type: type.GET_PREMIER_MOVIES,
    payload: axios.get(`${URL_BASE}/now_playing?apip_key=${KEY}`)
  })
}
