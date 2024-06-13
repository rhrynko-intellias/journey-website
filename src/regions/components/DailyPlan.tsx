import { Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DragHandleIcon from '@mui/icons-material/DragHandle';

import { Place } from "../types";


type Props = {
  open: boolean;
  onClose: () => void;
  places: {
    day: string;
    duration: string;
    items: Place[]
  }[]
};

export const DailyPlan = ({ open, onClose, places }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="600">2 Days Plan</Typography>
        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {places.map((place, index) => (
          <Box key={index} mb={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography variant="h6" fontWeight="600">
                {place.day}
              </Typography>
              <Stack direction="row" spacing={1}>
                <img src="right-direction.svg" alt="right-direction" />
                <Typography variant="body2">
                  {place.duration}
                </Typography>
                <MoreHorizIcon fontSize="small" />
              </Stack>
            </Stack>
            {place.items.map((item, index) => (
              <Stack direction="row" justifyContent="space-between" spacing={2} key={index} mb={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <img
                    src={item.image}
                    alt={item.title}
                    height={132}
                    width={96}
                    style={{ borderRadius: 12 }}
                  />
                  <Stack spacing={1.5}>
                    <Typography variant="h6" fontWeight="600">
                      {item.title}
                    </Typography>
                    {item.curatorPick && (
                      <Box display="flex">
                        <Typography
                          variant="body2"
                          bgcolor="rgba(242, 242, 247, 1)"
                          p={1}
                          borderRadius={4}
                        >
                          Curator's pick
                        </Typography>
                      </Box>
                    )}
                    <Typography variant="body2">{item.description}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <DragHandleIcon />
                  <MoreHorizIcon />
                </Stack>
              </Stack>
            ))}
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};