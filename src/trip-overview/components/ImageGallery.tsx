import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';

export const ImageGallery = () => {
  return (
    <Box position="relative">
      <ImageList
        sx={{ width: "100%", height: 400, borderRadius: 5, overflow: "hidden" }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: "120px",
          height: "30px",
          color: "white",
          backgroundColor: "rgba(136, 136, 136, 0.3)",
          borderRadius: 5,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "rgba(136, 136, 136, 0.8)",
          }
        }}
        startIcon={<AppsIcon />} >
        <Typography variant="body2">All photos</Typography>
      </Button>
    </Box>
  );
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
];