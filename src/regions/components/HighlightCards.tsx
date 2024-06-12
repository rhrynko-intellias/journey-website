import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Chip } from '@mui/material';

type Place = {
  title: string;
  image: string;
  description: React.ReactNode;
  curatorPick?: boolean;

}

type HighlightCardsProps = {
  places: Place[];
  children: (places: Place[]) => React.ReactNode;
};

export const HighlightCards = ({ places, children }: HighlightCardsProps) => {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        {children(places)}
      </Grid>
    </Box>
  );
};

type HighlightCardProps = {
  place: Place;
  children: React.ReactNode;
};

export const HighlightCard = ({ place, children }: HighlightCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={place.image}
          alt={place.title}
        />
        {place.curatorPick && (
          <Chip
            label="Curator's pick"
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              color: 'black',
            }}
          />
        )}
        <CardContent>
          <Typography variant="h6" fontWeight="600">{place.title}</Typography>
          {children}
        </CardContent>
      </Card>
    </Grid>
  )
}
