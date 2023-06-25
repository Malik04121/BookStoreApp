import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar';
import { MainRoute } from './component/route';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bg="rgb(44, 44, 44)">
     <Navbar/>
     <MainRoute/>
    </Box>
  );
}

export default App;
