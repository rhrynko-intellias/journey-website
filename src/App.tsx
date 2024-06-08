import { Box } from '@mui/material';
import { Header } from './shell/Header';
import { TripOverview } from './trip-overview/TripOverview';

function App() {
  return (
    <Box>
      <Header />
      <Box p={4}>
        <TripOverview />
      </Box>
    </Box>
  );
}

export default App;
