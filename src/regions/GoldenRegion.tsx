import { useContext, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { Wizard } from "../components/Wizard";
import { HighlightCard, HighlightCards } from "./components/HighlightCards";
import { dailyPlaces, hotels, waterfalls } from "./mockData";
import { ActionButton } from "../components/ActionButton";
import { ScrollContext } from "../context/ScrollContext";
import { DailyPlan } from "./components/DailyPlan";

export const GoldenRegion = () => {
  const { ref } = useContext(ScrollContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Wizard
        steps={[{
          title: (
            <Typography variant="h6" fontWeight="600" ref={ref}>Golden Circle Region</Typography>
          ),
          content: (
            <Typography variant="body2">
              The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík.
              This scenic loop includes three primary attractions:
              Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates
              and witness the site of Iceland's ancient parliament.
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
