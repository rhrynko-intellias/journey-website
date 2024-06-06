import { Stack, Typography } from '@mui/material';
import { AppBar } from './styled';

export function Header() {
  return (
    <AppBar>
      <Stack height="64px" direction="row" alignItems="center" px={4}>
        <Typography variant='h6'>
          Journey Website
        </Typography>
      </Stack>
    </AppBar>
  );
}
