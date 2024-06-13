import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { Wizard } from "../components/Wizard";
import { HighlightCard, HighlightCards } from "./components/HighlightCards";
import { dailyPlaces, hotels, waterfalls } from "./mockData";
import { ActionButton } from "../components/ActionButton";
import { DailyPlan } from "./components/DailyPlan";

export const SouthAndHighLands = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          title: (
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
              <Typography variant="h6" fontWeight="600">Region Highlights</Typography>
              <ActionButton
                title="Show daily plan"
                icon={<FormatListBulletedIcon />}
                buttonProps={{ sx: { borderRadius: 2, borderColor: 'rgba(151, 151, 151, 0.3)', textTransform: 'initial' } }}
                fabProps={{ sx: { bgcolor: 'white' } }}
                onClick={() => setOpen(true)}
              />
            </Stack>
          ),
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
      <DailyPlan
        open={open}
        onClose={() => setOpen(false)}
        places={dailyPlaces}
      />
    </>
  )
};
