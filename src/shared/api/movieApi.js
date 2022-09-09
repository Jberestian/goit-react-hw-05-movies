import axios from 'axios';

import { data } from './baseApi';

const { BaseUrl, ApiKey } = data;

export const getTrends = async () => {
  const { data } = await axios.get(
    `${BaseUrl}trending/all/day?api_key=${ApiKey}`
  );
  return data.results;
};

export const getSearchMovies = async (q, page = 1) => {
  const { data } = await axios.get(
    `${BaseUrl}search/movie?api_key=${ApiKey}&query=${q}&page=${page}`
  );
  return data;
};

export const getMovieDedails = async id => {
  const { data } = await axios.get(`${BaseUrl}movie/${id}?api_key=${ApiKey}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(
    `${BaseUrl}movie/${id}/credits?api_key=${ApiKey}`
  );
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `${BaseUrl}movie/${id}/reviews?api_key=${ApiKey}`
  );
  return data;
};
