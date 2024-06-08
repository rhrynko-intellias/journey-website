import { Typography, styled, Stack, Button } from '@mui/material';

type Props = {
  duration: string;
};

export const TripDetails = ({ duration }: Props) => {
  return (
    <Container direction="row">
      <Stack gap={1}>
        <Typography
          variant="body2"
          fontSize="15px"
          lineHeight="21px"
          color="rgba(60, 60, 67, 0.8)">Trip duration</Typography>
        <Typography variant="subtitle1" fontWeight="600">{duration}</Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          variant="body2"
          fontSize="15px"
          lineHeight="21px"
          color="rgba(60, 60, 67, 0.8)">Exploration</Typography>
        <Typography variant="subtitle1" fontWeight="600">4 regions</Typography>
      </Stack>
      <Stack gap={1}>
        <Typography
          variant="body2"
          fontSize="15px"
          lineHeight="21px"
          color="rgba(60, 60, 67, 0.8)">Flight</Typography>
        <Typography variant="subtitle1" fontWeight="600">7h 20m from SFOs</Typography>
      </Stack>
      <Button variant="text" sx={{ color: 'rgba(113, 78, 255, 1)', textDecoration: 'none' }} >
        <Typography variant="button" fontWeight="600">View itinerary</Typography>
      </Button>
    </Container>
  );
};

const Container = styled(Stack)`
  border: 1px solid rgba(151, 151, 151, 0.3);
  border-radius: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;
