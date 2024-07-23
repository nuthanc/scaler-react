import { useCallback, useEffect, useState } from 'react';
import { apiInstance } from '../api';

export const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPopularMovies = useCallback(() => {
    setLoading(true);
    apiInstance
      .get(`/movie/popular?language=en-US&page=${page}`)
      .then((resp) => {
        setMovies((movies) => movies.concat(resp.data?.results));
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  return { movies, setPage, loading, refetch: fetchPopularMovies };
};
