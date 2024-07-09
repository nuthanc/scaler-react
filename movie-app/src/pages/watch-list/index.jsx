import { useEffect, useState } from 'react';
import MovieList from '../../components/movie-list';
import { apiInstance } from '../../api';

const WatchList = () => {
  const [movies, setMovies] = useState([]);
  // todo(nuthan): Move to a custom hook
  const fetchWatchList = () => {
    apiInstance
      .get(
        '/account/21311488/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc'
      )
      .then((resp) => setMovies(resp.data?.results));
  };

  useEffect(() => {
    fetchWatchList();
  }, []);

  return <MovieList movies={movies} fromWatchList/>;
};

export default WatchList;
