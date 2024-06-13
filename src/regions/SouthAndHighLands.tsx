import { Box, Stack, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { Wizard } from "../components/Wizard";
import { HighlightCard, HighlightCards } from "./components/HighlightCards";
import { hotels, waterfalls } from "./mockData";

export const SouthAndHighLands = () => {
  return (
    <Wizard
      steps={[{
        title: 'South & HighLands',
        subtitle: (
          <Stack direction="row" spacing={2}>
            <Typography variant="body2">Geysers</Typography>
            <Typography variant="body2">Waterfalls</Typography>
            <Typography variant="body2">Crater lakes</Typography>
          </Stack>
        ),
        content: (
          <Typography variant="body2">
            The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders,
            from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches.
            This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored.
            Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.
          </Typography>
        )
      },
      {
        title: 'Region Highlights',
        content: (
          <HighlightCards places={waterfalls}>
            {(places) => (
              <>
                {places.map((place, index) => (
                  <HighlightCard place={place} key={index}>
                    <Typography variant="body2">
                      {place.description}
                    </Typography>
                  </HighlightCard>
                ))}
              </>
            )}
          </HighlightCards>
        )
      },
      {
        title: 'Where to stay',
        content: (
          <HighlightCards places={hotels}>
            {(places) => (
              <>
                {places.map((place, index) => (
                  <HighlightCard place={place} key={index}>
                    <Stack direction="row" alignItems="center">
                      <Box sx={{ bgcolor: 'yellow', width: 16, height: 16 }}>
                        <ArrowUpwardIcon sx={{ fontSize: 16, color: 'black' }} />
                      </Box>
                      <Typography variant="body2" ml={1}>9.1/10</Typography>
                    </Stack>
                    <Typography variant="body2">

                      {place.description}
                    </Typography>
                  </HighlightCard>
                ))}
              </>
            )}
          </HighlightCards>
        )
      }
      ]}
    />
  )
};
