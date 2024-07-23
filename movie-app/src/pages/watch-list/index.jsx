import MovieList from '../../components/movie-list';
import { useMoviesWatchList } from '../../hooks/useMoviesWatchList';

const WatchList = () => {
  const { movies, loading, refetch, setPage } = useMoviesWatchList();
  return (
    <MovieList
      movies={movies}
      loading={loading}
      fromWatchList
      refetch={refetch}
      setPage={setPage}
    />
  );
};

export default WatchList;
