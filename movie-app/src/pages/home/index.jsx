import { useEffect, useState } from 'react';

import { apiInstance } from '../../api';
import MovieList from '../../components/movie-list';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // todo(nuthan): Move to a custom hook
  const fetchPopularMovies = () => {
    apiInstance
      .get('/movie/popular?language=en-US&page=1')
      .then((resp) => setMovies(resp.data?.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  if (!movies.length) return;

  return <MovieList movies={movies} />;
};

export default Home;
