import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { ImageGallery } from "./components/ImageGallery";
import { TripFilter } from "./components/TripFilter";
import { useState } from "react";

export const TripOverview = () => {
  const [selectedDuration, setSelectedDuration] = useState<string>(durationOptions[0]);

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <TripFilter
          durationOptions={durationOptions}
          onDurationChange={setSelectedDuration}
          duration={selectedDuration}
        />
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<AddIcon fontSize="large" />}
          sx={{
            borderRadius: 5,
            borderColor: 'rgba(151, 151, 151, 0.3)',
            textAlign: 'center',
            textDecoration: 'none'
          }}>
          <Typography variant="button" fontWeight="600">Create</Typography>
        </Button>
      </Stack>
      <ImageGallery />
    </Box>
  );
}

const durationOptions = ['5 days', '6 days', '7 days', '8 days', '9 days', '10 days'];
