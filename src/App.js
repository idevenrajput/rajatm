import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar';  
import Slider from './Components/Home/Slider';
import MyCarousel from './Components/Home/MyCarousel';
import MyWorkTools from './Components/Home/MyWorkTools';
import { Typography } from '@mui/material';
import RecentBlogs from './Components/Home/RecentBlogs';
import AndroidDevelopment from './Components/Home/AndroidDevelopment';

function App() {
  return (
    <>
      <Navbar /> 
      <MyCarousel/>
      <MyWorkTools/>
      <Typography sx={{color: 'black', fontFamily: 'poppins', fontSize:'2vw', mx: 2, m:5, fontStyle: 'bold'}}>
          Recent Posts
      </Typography>
      <RecentBlogs/>
      <AndroidDevelopment/>
    </>
  );
}

export default App;
