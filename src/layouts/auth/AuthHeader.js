import { AppBar, Box, Toolbar, styled, Link, Hidden, Stack } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { HEADER } from '../../config';
import MenuMobile from '../main/MenuMobile';
import authConfig from './AuthConfig';
import useOffSetTop from '../../hooks/useOffSetTop';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Logo from '../../components/Logo';
import { useDispatch } from 'react-redux';
import { openDialog } from 'src/redux/slices/dialog';

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  background: theme.palette.background.hero,
  [theme.breakpoints.up('md')]: {
    background: 'transparent',
  },
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 400,
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
  const { pathname } = useRouter();
  const isDesktop = useResponsive('up', 'md');
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const isHome = pathname === '/';

  const dispatch = useDispatch();

  const handleClick = (target) => {
    dispatch(openDialog(target));
  };

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
          {/* <ToolbarStyle>
            <Hidden mdUp>
              <Logo />

              <Box flexGrow={1} />
            </Hidden>

            {isDesktop ? (
              <Stack direction={'row'} justifyContent={'space-around'} width={'100%'}>
                {authConfig.map((item) => (
                  <NextLink href={item.path} passHref key={item.title}>
                    <LinkStyle
                      {...(item.target && {
                        onClick: () => handleClick(item.target),
                      })}
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
              </Stack>
            ) : (
              <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={authConfig} />
            )}
          </ToolbarStyle> */}
        </AppBar>
      </Box>
    </>
  );
}
