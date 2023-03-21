// next
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, Stack, Button, Hidden } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';
// import { useSnackbar } from 'notistack';

// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
import Logo from '../../components/Logo';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
import { IconButtonAnimate } from '../../components/animate';
import { ShoppingCartIcon } from '../../assets';
import MyAvatar from '../../components/MyAvatar';
import useAuth from '../../hooks/useAuth';
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

const Badge = dynamic(() => import('@mui/material/Badge'), { ssr: false })

// ----------------------------------------------------------------------

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z1,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const { logout, isAuthenticated } = useAuth();

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);

  const theme = useTheme();

  const { pathname, push, router } = useRouter();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const cartCount = checkout.cart.length;

  const isDesktop = useResponsive('up', 'md');

  const isHome = pathname === '/';

  const handleLogout = async () => {
    try {
      await logout();
      router.replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickAvatar = async () => {
    if (isAuthenticated) await handleLogout();
    else push(PATH_AUTH.login);
  };

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(!isHome && {
            background: theme.palette.secondary.main,
          }),
          ...(isOffset && {
            ...cssStyles(theme).bgGradient({ direction: 'right', startColor: '#163E2B', endColor: '#0B2619' }),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Logo />

          <Box sx={{ flexGrow: 1 }} />

          {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}

          <Box sx={{ flexGrow: 1 }} />

          <Stack
            mr={{
              xs: 2,
              md: 3,
            }}
          >
            {cartCount > 0 ? <Badge component="div" badgeContent={cartCount} color="error" sx={{ width: 20, height: 10, top: 3 }} /> : ''}
            <NextLink passHref href={PATH_PAGE.cart}>
              <IconButtonAnimate>
                <ShoppingCartIcon sx={{ width: 28, height: 28 }} />
              </IconButtonAnimate>
            </NextLink>
          </Stack>
          {isAuthenticated ? (
            <>
              {/* <Badge badgeContent={3} color="error"> */}
              <IconButtonAnimate
                sx={{
                  p: 0,
                }}
              >
                <MyAvatar sx={{ width: 50, height: 50 }} onClick={handleClickAvatar} />
              </IconButtonAnimate>
            </>
          ) : (
            <Hidden mdDown>
              <Box display={'flex'} gap={2}>
                <Box display={{ xs: 'none', md: 'block' }}>
                  <NextLink href={PATH_AUTH.register} passHref>
                    <Button variant="outlined" size="medium">
                      Sign up
                    </Button>
                  </NextLink>
                </Box>
                <NextLink href={PATH_AUTH.login} passHref>
                  <Button variant="contained" size="medium" sx={{ px: { lg: 5, md: 0, xs: 5 } }}>
                    Log in
                  </Button>
                </NextLink>
              </Box>
            </Hidden>
          )}

          {/* </Badge> */}

          {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />}
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
