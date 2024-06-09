import { Avatar, Box, Stack, Typography } from "@mui/material";
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import IosShareIcon from '@mui/icons-material/IosShare';

import { ActionButton } from "../components/ActionButton";
import { IcelandItinerary } from "./components/IcelandItinerary";

export const IcelandHighLights = () => {
  return (
    <Box mt={8}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h5"
          fontSize="28px"
          fontWeight="600"
        >
          Iceland's Highlights
        </Typography>
        <Stack direction="row" gap={2}>
          <ActionButton
            title="Add to wishlist"
            icon={<TurnedInNotIcon />}
            buttonProps={{ sx: { borderRadius: 2, borderColor: 'rgba(151, 151, 151, 0.3)' } }}
            fabProps={{ sx: { bgcolor: 'white' } }}
          />
          <ActionButton
            title="Share"
            icon={<IosShareIcon />}
            buttonProps={{ sx: { borderRadius: 2, borderColor: 'rgba(151, 151, 151, 0.3)' } }}
            fabProps={{ sx: { bgcolor: 'white' } }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" my={2}>
        <Avatar src="path_to_profile_image" alt="Curated by Sandra" />
        <Box ml={2}>
          <Typography variant="subtitle1" fontWeight="600">Curated by Sandra</Typography>
          <Typography variant="body2" color="rgba(60, 60, 67, 0.8)">Fyno expert</Typography>
        </Box>
      </Stack>
      <Box mb={2}>
        <Typography>
          Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty.
          From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history,
          Iceland promises an unforgettable adventure for every traveler.
        </Typography>
      </Box>
      <IcelandItinerary />
    </Box>
  )
};
