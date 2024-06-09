import { Box, Typography, Grid, Stack, styled } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';

export const IcelandItinerary = () => {
  return (
    <Stack>
      <Typography variant="h5" fontWeight="600" mb={2}>
        Iceland itinerary
      </Typography>

      <OuterBox>
        <Grid container spacing={2} alignItems="center" columnSpacing={10}>
          <Grid item xs={12} md={4} display="flex" justifyContent="space-between" alignItems="center">
            <StyledBox>
              <Typography variant="body2">Reykjavík, KEF</Typography>
            </StyledBox>
            <FlightTakeoffIcon />
            <StyledBox>
              <Typography variant="body2">San Francisco, SFO</Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="space-between" alignItems="center">
            <StyledBox>
              <CalendarTodayIcon />
              <Typography variant="body2" ml={1}>Jul 03 - Jul 11</Typography>
            </StyledBox>
            <StyledBox>
              <PeopleIcon />
              <Typography variant="body2" ml={1}>2</Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </OuterBox>
    </Stack>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
}));

const OuterBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: 'rgba(240, 244, 253, 1)',
}));
