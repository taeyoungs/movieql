import { getMovies, getMovieDetail, getSuggestionMovies } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovieDetail(id),
    suggestions: (_, { id }) => getSuggestionMovies(id),
  },
};

export default resolvers;
