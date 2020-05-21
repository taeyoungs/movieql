import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL = `${BASE_URL}movie_details.json`;
const SUGGESTION_MOVIES = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(LIST_MOVIES, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });

  return movies;
};

export const getMovieDetail = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(MOVIE_DETAIL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestionMovies = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(SUGGESTION_MOVIES, {
    params: {
      movie_id: id,
    },
  });

  return movies;
};
