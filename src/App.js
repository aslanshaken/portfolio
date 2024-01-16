import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Helmet from 'react-helmet';

// Import components
import Experience from './pages/Experiance/Experiance';
import TextCarousel from './pages/TextCarousel/TextCarousel';
import About from './pages/About/About';
import Waterfall from './pages/Waterfall/Waterfall';
import Project from './pages/Project/Project';
import Resume from './pages/Resume/Resume';
import Calendly from './pages/Calendly/Calendly';

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
        lineHeight: 1.8,
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

  // Function for smooth scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const top = element.getBoundingClientRect().top;

      setTimeout(() => {
        window.scrollTo({
          top: window.scrollY + top - 50,
          behavior: 'smooth',
        });
      }, 500);
    } else {
      console.error(`Element with id '${id}' not found.`);
    }
  };

  // State for mobile drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Render the main content with the header, sections, and footer
  return (
    <div className="App">
      <Helmet>
        {/* Add Calendly widget script and link tags to the head */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
        <script type="text/javascript">
          {`
            window.onload = function() {
              Calendly.initBadgeWidget({
                url: 'https://calendly.com/aslanshaken/30min',
                text: 'Schedule time with me',
                color: '#0069ff',
                textColor: '#ffffff',
                branding: true
              });
            }
          `}
        </script>
      </Helmet>

      <ThemeProvider theme={theme}>
        {/* Custom Header */}
        <AppBar position="fixed">
          <Toolbar>
            {/* Burger button for mobile */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            {/* Add hide-on-mobile class to hide on mobile view */}
            <div className="hide-on-mobile">
              <Button color="inherit" onClick={() => scrollToSection('about')}>
                About Me
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('education')}>
                Education
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('experience')}>
                Work Experience
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('project')}>
                Projects
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('skills')}>
                Skills
              </Button>
              {/* <Button color="inherit" onClick={() => scrollToSection('resume')}>
                Resume
              </Button> */}
            </div>
          </Toolbar>
        </AppBar>

        {/* Drawer for mobile */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <div
            style={{ width: '250px', display: 'flex', flexDirection: 'column', padding: '16px' }}
          >
            <IconButton
              sx={{ alignSelf: 'flex-end', marginBottom: '8px' }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Button onClick={() => { scrollToSection('about'); setIsDrawerOpen(false) }}>
              About Me
            </Button>
            <Button onClick={() => { scrollToSection('education'); setIsDrawerOpen(false) }}>
              Education
            </Button>
            <Button onClick={() => { scrollToSection('experience'); setIsDrawerOpen(false) }}>
              Work Experience
            </Button>
            <Button onClick={() => { scrollToSection('project'); setIsDrawerOpen(false) }}>
              Projects
            </Button>
            <Button onClick={() => { scrollToSection('skills'); setIsDrawerOpen(false) }}>
              Skills
            </Button>
            <Button onClick={() => { scrollToSection('resume'); setIsDrawerOpen(false) }}>
              Resume
            </Button>
          </div>
        </Drawer >

        {/* Sections */}
        <div id="about"><About /></div>
        <div id="education"><Waterfall /></div>
        <div id="experience"><Experience /></div>
        <div id="project"><Project /></div>
        <div id="skills"><TextCarousel /></div>
        {/* <div id="resume"><Resume /></div> */}
        {/* <div id="calendly"><Calendly /></div> */}

        {/* ScrollToTopButton */}
        {/* <ScrollToTopButton /> */}

        {/* Footer */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
