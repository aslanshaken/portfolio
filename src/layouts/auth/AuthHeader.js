import { AppBar, Box, Link, Toolbar, Typography, styled } from '@mui/material';
import NextLink from 'next/link';
import { HEADER } from '../../config';
import authConfig from './AuthConfig';

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  minWidth: 430,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  background: theme.palette.background.hero,
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
    background: 'transparent',
  },
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 700,
  fontSize: '1.125rem',
  letterSpacing: '0.05em',
  color: theme.palette.common.white,
  width: '25%',
  textAlign: 'center',
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

//--------------------------------------------------
export default function AuthHeader() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/assets/auth_bg.png)', // Replace image_url with the URL of your desired image.
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          height: '100%',
          position: 'relative',
        }}
      >
        <AppBar
          sx={{
            backdropFilter: 'blur(20.5px)',
            background: 'linear-gradient(180deg, rgba(64, 74, 84, 0.25) 0%, rgba(0, 0, 0, 0) 100%)',
            position: {
              xs: 'fixed',
              md: 'absolute',
            },
            overflowX: 'auto',
            boxShadow: 0,
          }}
        >
          <ToolbarStyle>
            {authConfig.map((item) => (
              <NextLink href={item.path} passHref key={item.title}>
                <LinkStyle
                  sx={{
                    ...{
                      color: 'text.white',
                    },
                  }}
                >
                  {item.title}
                </LinkStyle>
              </NextLink>
            ))}
          </ToolbarStyle>
        </AppBar>
      </Box>
    </>
  );
}
