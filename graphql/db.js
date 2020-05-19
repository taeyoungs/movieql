export let movies = [
  {
    id: 0,
    title: '쥬만지',
    score: 9,
  },
  {
    id: 1,
    title: '버즈 오브 프레이',
    score: 3,
  },
  {
    id: 2,
    title: '메이즈 러너',
    score: 7,
  },
  {
    id: 3,
    title: '소공녀',
    score: 6,
  },
  {
    id: 4,
    title: '맘마미아',
    score: 5,
  },
  {
    id: 5,
    title: '데자뷰',
    score: 10,
  },
];

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

export const addMovie = (title, score) => {
  const newMovie = {
    id: movies.length,
    title,
    score,
  };
  movies.push(newMovie);

  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
