import { Grid, Skeleton } from '@mui/material';

const Shimmer = () => {
  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Skeleton variant="rectangular" width={200} height={380} />);
  }
  return (
    <Grid container spacing={3} sx={{ marginTop: '2px', marginLeft: 'auto' }}>
      {cards.map((card, idx) => {
        return (
          <Grid item key={idx}>
            {card}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Shimmer;
