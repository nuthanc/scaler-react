import { useCallback, useEffect, useState } from 'react';
import { apiInstance } from '../api';

export const useMoviesWatchList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchWatchList = useCallback(() => {
    setLoading(true);
    apiInstance
      .get(
        `/account/21311488/watchlist/movies?language=en-US&page=${page}&sort_by=created_at.asc`
      )
      .then((resp) => {
        setMovies(resp.data?.results);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchWatchList();
  }, [fetchWatchList]);

  return { movies, setPage, loading, refetch: fetchWatchList };
};
