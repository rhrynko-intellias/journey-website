import { Box } from '@mui/material';

import { Header } from './shell/Header';
import { TripOverview } from './trip-overview/TripOverview';
import { IcelandHighLights } from './iceland-highlight/IcelandHighLights';
import { GoldenRegion } from './regions/GoldenRegion';

function App() {
  return (
    <Box>
      <Header />
      <Box p={{ xs: 2, lg: 4 }}>
        <TripOverview />
        <IcelandHighLights />
        <GoldenRegion />
      </Box>
    </Box>
  );
}

export default App;
