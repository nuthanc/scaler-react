import { useCallback, useEffect, useState } from 'react';
import { apiInstance } from '../api';

export const usePopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPopularMovies = useCallback(() => {
    apiInstance
      .get(`/movie/popular?language=en-US&page=${page}`)
      .then((resp) => setMovies(resp.data?.results));
  }, [page]);

  useEffect(() => {
    fetchPopularMovies();
  }, [fetchPopularMovies]);

  return { movies, setPage };
};
