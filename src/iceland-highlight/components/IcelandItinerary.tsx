import { Box, Typography, Stack, styled } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';

export const IcelandItinerary = () => {
  return (
    <Stack>
      <Typography variant="h5" fontWeight="600" mb={2}>
        Iceland itinerary
      </Typography>

      <OuterBox direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <StyledBox>
            <Typography variant="body2">Reykjavík, KEF</Typography>
          </StyledBox>
          <FlightTakeoffIcon />
          <StyledBox>
            <Typography variant="body2">San Francisco, SFO</Typography>
          </StyledBox>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <StyledBox>
            <CalendarTodayIcon />
            <Typography variant="body2" ml={1}>Jul 03 - Jul 11</Typography>
          </StyledBox>
          <StyledBox>
            <PeopleIcon />
            <Typography variant="body2" ml={1}>2</Typography>
          </StyledBox>
        </Stack>
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

const OuterBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4, 2),
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: 'rgba(240, 244, 253, 1)',
}));
