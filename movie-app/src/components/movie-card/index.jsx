import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';

import { apiInstance, POSTER_BASE_URL } from '../../api';

const MovieCard = ({ movie, fromWatchList, refetch = () => {} }) => {
  const handleBookmarkClick = (movieId, fromWatchList) => {
    apiInstance
      .post('/account/21311488/watchlist', {
        media_type: 'movie',
        media_id: movieId,
        watchlist: !fromWatchList,
      })
      .finally(() => refetch());
  };

  return (
    <Card sx={{ width: 200, height: 380 }}>
      <CardMedia
        component="img"
        alt={movie?.title}
        height="220"
        image={POSTER_BASE_URL + movie?.poster_path}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          title={movie?.title}
          noWrap
        >
          {movie?.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="left"
          sx={{
            width: 150,
            overflow: 'clip',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
          }}
        >
          {movie?.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          title="Add to Watch List"
          onClick={() => handleBookmarkClick(movie?.id, fromWatchList)}
        >
          {fromWatchList ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />}
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  fromWatchList: PropTypes.bool,
  refetch: PropTypes.func,
};

export default MovieCard;
