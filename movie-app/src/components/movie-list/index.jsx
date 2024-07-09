import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MovieList = ({ movies, fromWatchList }) => {
  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={3}
      sx={{ marginTop: '2px' }}
    >
      {movies.map((movie) => {
        return (
          <Grid item key={movie.id}>
            <Item>
              <MovieCard
                movie={movie}
                fromWatchList={fromWatchList}
              />
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  fromWatchList: PropTypes.bool,
};

export default MovieList;
