import { Typography, styled, Grid, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { ScrollContext } from '../../context/ScrollContext';

type Props = {
  duration: string;
};

export const TripDetails = ({ duration }: Props) => {
  const { onScroll } = useContext(ScrollContext)

  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={6} sm={3}>
          <Box>
            <Typography
              variant="body2"
              fontSize="15px"
              lineHeight="21px"
              color="rgba(60, 60, 67, 0.8)"
            >
              Trip duration
            </Typography>
            <Typography variant="subtitle1" fontWeight="600">{duration}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box>
            <Typography
              variant="body2"
              fontSize="15px"
              lineHeight="21px"
              color="rgba(60, 60, 67, 0.8)"
            >
              Exploration
            </Typography>
            <Typography variant="subtitle1" fontWeight="600">4 regions</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box>
            <Typography
              variant="body2"
              fontSize="15px"
              lineHeight="21px"
              color="rgba(60, 60, 67, 0.8)"
            >
              Flight
            </Typography>
            <Typography variant="subtitle1" fontWeight="600">7h 20m from SFOs</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} display="flex" alignContent="center" justifyContent="end">
          <Button variant="text" sx={{ color: 'rgba(113, 78, 255, 1)', textDecoration: 'none' }} onClick={() => onScroll()} >
            <Typography variant="button" fontWeight="600">View itinerary</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(Box)`
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;
