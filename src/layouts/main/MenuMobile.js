import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Drawer,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Button,
  Stack,
  Badge,
} from '@mui/material';
// config
import { NAVBAR } from '../../config';
// components
import Logo from '../../components/Logo';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { IconButtonAnimate } from '../../components/animate';
import { NavSectionVertical } from '../../components/nav-section';
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
import { useDispatch } from 'react-redux';
import { openDialog } from 'src/redux/slices/dialog';
import useAuth from 'src/hooks/useAuth';
import { ShoppingCartIcon } from 'src/assets';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

// ----------------------------------------------------------------------

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

MenuMobile.propTypes = {
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuMobile({ isHome, navConfig }) {
  const { pathname } = useRouter();

  const { isAuthenticated } = useAuth();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart?.reduce((total, currentValue) => total + currentValue.count, 0));
  }, [cart]);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box order={-1}>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          position: 'relative',
          ml: 1,
          ...(isHome && { color: 'common.white' }),
        }}
      >
        {cartCount > 0 && (
          <Badge
            component="div"
            badgeContent={cartCount}
            color="error"
            sx={{ width: 20, height: 10, position: 'absolute', top: 0, right: 0 }}
          />
        )}
        <Iconify icon={'material-symbols:menu-rounded'} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260, background: 'linear-gradient(106.35deg, #163E2B 0%, #0B2619 100%);' } }}
      >
        <Stack>
          <Logo sx={{ mx: 2.5, my: 3, height: '40' }} />
          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem key={link.title} item={link} isOpen={open} onOpen={handleOpen} />
            ))}
            <NextLink passHref href={PATH_PAGE.cart}>
              <Stack ml={3} mt={2}>
                <IconButtonAnimate>
                  {cartCount > 0 && (
                    <Badge
                      component="div"
                      badgeContent={cartCount}
                      color="error"
                      sx={{ width: 20, height: 10, position: 'absolute', top: 0, right: 0 }}
                    />
                  )}
                  <ShoppingCartIcon sx={{ width: 28, height: 28 }} />
                </IconButtonAnimate>
              </Stack>
            </NextLink>
          </List>

          {!isAuthenticated && (
            <>
              <Box mt={2} mx={4}>
                <NextLink href={PATH_AUTH.register} passHref>
                  <Button variant="outlined" size="medium" sx={{ width: '100%' }}>
                    Sign up
                  </Button>
                </NextLink>
              </Box>
              <Box mt={2} mx={4}>
                <NextLink href={PATH_AUTH.login} passHref>
                  <Button variant="contained" size="medium" sx={{ width: '100%' }}>
                    Log in
                  </Button>
                </NextLink>
              </Box>
            </>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
}

// ----------------------------------------------------------------------

MenuMobileItem.propTypes = {
  isOpen: PropTypes.bool,
  item: PropTypes.shape({
    children: PropTypes.array,
    icon: PropTypes.any,
    path: PropTypes.string,
    title: PropTypes.string,
    target: PropTypes.string,
  }),
  onOpen: PropTypes.func,
};

function MenuMobileItem({ item, isOpen, onOpen }) {
  const { pathname } = useRouter();
  const { title, path, icon, children, target } = item;
  const dispatch = useDispatch();

  const handleClick = (target) => {
    dispatch(openDialog(target));
  };

  const isActive = pathname === path;

  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                '& .MuiList-root:last-of-type .MuiListItemButton-root': {
                  height: 200,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  bgcolor: 'background.neutral',
                  backgroundRepeat: 'no-repeat',
                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }

  return (
    <>
      {target ? (
        <ListItemStyle
          {...(target && {
            onClick: () => handleClick(target),
          })}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
        </ListItemStyle>
      ) : (
        <NextLink href={path} passHref>
          <ListItemStyle
            sx={{
              ...(isActive && {
                color: 'primary.main',
                fontWeight: 'fontWeightMedium',
                bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
              }),
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText disableTypography primary={title} />
          </ListItemStyle>
        </NextLink>
      )}
    </>
  );
}
