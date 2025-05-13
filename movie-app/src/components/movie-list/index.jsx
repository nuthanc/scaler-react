import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';
import Shimmer from '../shimmer';
import { useEffect, useRef } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MovieList = ({ movies, fromWatchList, refetch, loading, setPage }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        setPage((page) => page + 1);
      }
    });

    const loadMoreButton = ref.current;

    if (loadMoreButton) {
      observer.observe(loadMoreButton);
    }

    return () => {
      if (loadMoreButton) observer.disconnect(loadMoreButton);
    };
  }, [loading, setPage]);

  if (loading) {
    return <Shimmer />;
  }
  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: '2px', marginLeft: 'auto' }}>
        {movies.map((movie) => {
          return (
            <Grid item key={movie.id}>
              <Item>
                <MovieCard
                  movie={movie}
                  fromWatchList={fromWatchList}
                  refetch={refetch}
                />
              </Item>
            </Grid>
          );
        })}
      </Grid>
      <button ref={ref}>Load More</button>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  fromWatchList: PropTypes.bool,
  refetch: PropTypes.func,
  setPage: PropTypes.func,
  loading: PropTypes.bool,
};

export default MovieList;
