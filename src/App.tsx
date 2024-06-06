import './App.css';
import { Box } from '@mui/material';
import { Header } from './shell/Header';
import { ImageGallery } from './components/ImageGallery';

function App() {
  return (
    <Box>
      <Header />
      <Box p={4}>
        <ImageGallery />
      </Box>
    </Box>
  );
}

export default App;
