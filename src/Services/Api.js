import axios from 'axios';
import { API_KEY, BASE_URL } from './Api-key';
// https://api.themoviedb.org/3/movie/550?api_key=839ee1ac45e2249141bd738796b376ad пример исп-я

// https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view    ссылка на превью ДЗ
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  adult: false,
  language: 'en-US',
};

// ! ====== for component Home popular movies ======
export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');

  return data.results;
};

// ! ====== for component Movies search movies ======
export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=${page}`);

  return data.results;
};

// ! ====== for details info about movie ======
export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);

  return data;
};

// ! ====== get info about the cast of movie ======
export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);

  return data;
};

// ! ====== get info about the rewiews of movie ======
export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);

  return data;
};
