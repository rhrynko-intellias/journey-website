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
        {images.map((item) => (
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

const images = [
  {
    img: 'joshua-earle.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'gullfoss-waterfall.png',
    title: 'Burger',
  },
  {
    img: 'geysir-thermal-field.png',
    title: 'Camera',
  },
  {
    img: 'lakes.png',
    title: 'Coffee',
  },
  {
    img: 'cave.png',
    title: 'Hats',
  },
];
