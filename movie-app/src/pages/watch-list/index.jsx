import MovieList from '../../components/movie-list';
import { useMoviesWatchList } from '../../hooks/useMoviesWatchList';

const WatchList = () => {
  const { movies } = useMoviesWatchList();
  if (!movies.length) return;
  return <MovieList movies={movies} fromWatchList />;
};

export default WatchList;
