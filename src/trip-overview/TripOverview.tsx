import { Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { ImageGallery } from "./components/ImageGallery";
import { TripFilter } from "./components/TripFilter";
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

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
        <ActionButton title="Create" icon={<AddIcon />} />
      </Stack>
      <ImageGallery />
    </Box>
  );
}

const durationOptions = ['5 days', '6 days', '7 days', '8 days', '9 days', '10 days'];