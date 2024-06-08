import { Box } from '@mui/material';

import { Header } from './shell/Header';
import { TripOverview } from './trip-overview/TripOverview';
import { IcelandHighLights } from './iceland-highlight/IcelandHighLights';

function App() {
  return (
    <Box>
      <Header />
      <Box p={{ xs: 2, lg: 4 }}>
        <TripOverview />
        <IcelandHighLights />
      </Box>
    </Box>
  );
}

export default App;
