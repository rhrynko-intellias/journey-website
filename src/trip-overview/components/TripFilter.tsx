import { MenuItem, Select, Typography, styled, Stack, Divider } from '@mui/material';

type Props = {
  durationOptions: string[];
  onDurationChange: (duration: string) => void;
  duration: string;
};

export const TripFilter = ({ durationOptions, onDurationChange, duration }: Props) => {
  return (
    <Container direction="row" gap={2}>
      <Typography variant="subtitle1" fontWeight="600">Trips</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography variant="subtitle1" fontWeight="600">Iceland</Typography>
      <Divider orientation="vertical" flexItem />
      <Select
        value={duration}
        variant='standard'
        disableUnderline
        onChange={(e) => onDurationChange(e.target.value)}
        label="Duration"
      >
        {durationOptions.map((option) => (
          <MenuItem key={option} value={option}>
            <Typography variant="subtitle1" fontWeight="600">{option}</Typography>
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

const Container = styled(Stack)`
  border: 1px solid black;
  border-radius: 40px;
  align-items: center;
  padding: 0 16px;
`;
