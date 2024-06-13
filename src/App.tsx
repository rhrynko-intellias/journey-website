import { Box } from '@mui/material';

import { TripOverview } from './trip-overview/TripOverview';
import { IcelandHighLights } from './iceland-highlight/IcelandHighLights';
import { GoldenRegion } from './regions/GoldenRegion';
import { SouthAndHighLands } from './regions/SouthAndHighLands';
import { ScrollContextProvider } from './context/ScrollContext';

function App() {
  return (
    <Box>
      <Box p={{ xs: 2, lg: 4 }}>
        <ScrollContextProvider>
          <TripOverview />
          <IcelandHighLights />
          <GoldenRegion />
          <SouthAndHighLands />
        </ScrollContextProvider>
      </Box>
    </Box>
  );
}

export default App;
