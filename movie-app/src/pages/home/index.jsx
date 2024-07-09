import MovieList from '../../components/movie-list';
import { usePopularMovies } from '../../hooks/usePopularMovies';

const Home = () => {
  const { movies } = usePopularMovies();
  if (!movies.length) return;
  return <MovieList movies={movies} />;
};

export default Home;
