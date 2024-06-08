import { Box } from '@mui/material';
import { Header } from './shell/Header';
import { TripOverview } from './trip-overview/TripOverview';

function App() {
  return (
    <Box>
      <Header />
      <Box p={{ xs: 2, lg: 4 }}>
        <TripOverview />
      </Box>
    </Box>
  );
}

export default App;
