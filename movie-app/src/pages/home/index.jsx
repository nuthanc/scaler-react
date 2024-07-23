import MovieList from '../../components/movie-list';
import { usePopularMovies } from '../../hooks/usePopularMovies';

const Home = () => {
  const { movies, loading, setPage } = usePopularMovies();
  return <MovieList movies={movies} loading={loading} setPage={setPage} />;
};

export default Home;
