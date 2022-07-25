// import Header from "./pages/Header/Header";
// import Education from "./pages/Education/Education";
// import Experience from "./pages/Experiance/Experiance";
import TextCarousel from "./pages/TextCarousel/TextCarousel"
import './App.css'
// import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import Waterfall from "./pages/Waterfall/Waterfall";
import * as React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Project from "./pages/Project/Project";
import Resume from "./pages/Resume/Resume";

let theme = createTheme({
  typography: {
    body1: {
      fontWeight: 300,
      lineHeight: 1.8
    },
  },
});
theme = responsiveFontSizes(theme);



function App() {
  return(
  <div className="App">
    <ThemeProvider theme={theme}>
          {/* <Header/> */}
          {/* <Welcome/> */}
          <About/>
          {/* <Steps/> */}
          {/* <Experience/> */}
          <Waterfall/>
          <Project/>
          <TextCarousel/>
          <Resume/>
    </ThemeProvider>
  </div>
  );
}

export default App;
