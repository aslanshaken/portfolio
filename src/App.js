import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import './App.css';

// Import components
import Experience from "./pages/Experiance/Experiance";
import TextCarousel from "./pages/TextCarousel/TextCarousel";
import About from "./pages/About/About";
import Waterfall from "./pages/Waterfall/Waterfall";
import Project from "./pages/Project/Project";
import Resume from "./pages/Resume/Resume";

// Footer component
const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5%', color: '#888', background: 'white' }}>
      Made with ❤️ in ATX
    </div>
  );
};

// Main App component
function App() {
  // Theme setup
  let theme = createTheme({
    typography: {
      body1: {
        fontWeight: 300,
        lineHeight: 1.8
      },
    },
  });
  theme = responsiveFontSizes(theme);

  // ScrollToTopButton component
  const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <Button
        onClick={scrollToTop}
        variant="contained"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          display: isVisible ? 'block' : 'none',
        }}
      >
        <ArrowUpwardIcon />
      </Button>
    );
  };

  // Render the main content with the footer
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <About />
        <Waterfall />
        <Experience />
        <Project />
        <TextCarousel />
        <Resume />
        <ScrollToTopButton />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
