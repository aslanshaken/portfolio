import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Grid, List, Stack, Popover, ListSubheader, CardActionArea } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import { openDialog } from 'src/redux/slices/dialog';
import { useDispatch } from 'react-redux';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  fontWeight: 400,
  color: theme.palette.common.white,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

const ListItemStyle = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  marginTop: theme.spacing(3),
  color: theme.palette.text.secondary,
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: theme.palette.text.primary,
  },
}));

// ----------------------------------------------------------------------

MenuDesktop.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  navConfig: PropTypes.array,
};

export default function MenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row" sx={{ gap: { lg: 8, xs: 3 } }}>
        {navConfig.map((link) => (
          <MenuDesktopItem
            key={link.title}
            item={link}
            isOpen={open}
            onOpen={handleOpen}
            onClose={handleClose}
            isOffset={isOffset}
            isHome={isHome}
          />
        ))}
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['item', 'subheader']),
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          ml: '2px',
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 }),
        }}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------

MenuDesktopItem.propTypes = {
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
    target: PropTypes.string,
  }),
};

function MenuDesktopItem({ item, isOpen, onOpen, onClose }) {
  const { pathname } = useRouter();

  const { title, path, children, target } = item;

  const dispatch = useDispatch();

  const isActive = (path) => pathname === path;

  const handleClick = (target) => {
    dispatch(openDialog(target));
  };
  if (children) {
    return (
      <>
        <LinkStyle
          onClick={onOpen}
          sx={{
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            ...(isOpen && { opacity: 0.48 }),
          }}
        >
          {title}
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
            sx={{ ml: 0.5, width: 16, height: 16 }}
          />
        </LinkStyle>

        <Popover
          open={isOpen}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 80, left: 0 }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={onClose}
          PaperProps={{
            sx: {
              px: 3,
              pt: 5,
              pb: 3,
              right: 16,
              m: 'auto',
              borderRadius: 2,
              maxWidth: (theme) => theme.breakpoints.values.lg,
              boxShadow: (theme) => theme.customShadows.z24,
            },
          }}
        >
          <Grid container spacing={3}>
            {children.map((list) => {
              const { subheader, items } = list;

              return (
                <Grid key={subheader} item xs={12} md={subheader === 'Dashboard' ? 6 : 2}>
                  <List disablePadding>
                    <ListSubheader
                      disableSticky
                      disableGutters
                      sx={{
                        display: 'flex',
                        lineHeight: 'unset',
                        alignItems: 'center',
                        color: 'text.primary',
                        typography: 'overline',
                      }}
                    >
                      <IconBullet type="subheader" /> {subheader}
                    </ListSubheader>

                    {items.map((item) => (
                      <NextLink key={item.title} href={item.path} passHref>
                        <ListItemStyle
                          underline="none"
                          sx={{
                            ...(isActive(item.path) && {
                              typography: 'subtitle2',
                            }),
                          }}
                        >
                          {item.title === 'Dashboard' ? (
                            <CardActionArea
                              sx={{
                                py: 5,
                                px: 10,
                                borderRadius: 2,
                                color: 'primary.main',
                                bgcolor: 'background.neutral',
                              }}
                            >
                              <Box
                                component={m.img}
                                whileTap="tap"
                                whileHover="hover"
                                variants={{
                                  hover: { scale: 1.02 },
                                  tap: { scale: 0.98 },
                                }}
                                src="/assets/illustrations/illustration_dashboard.png"
                              />
                            </CardActionArea>
                          ) : (
                            <>
                              <IconBullet />
                              {item.title}
                            </>
                          )}
                        </ListItemStyle>
                      </NextLink>
                    ))}
                  </List>
                </Grid>
              );
            })}
          </Grid>
        </Popover>
      </>
    );
  }

  if (target) {
    return (
      <LinkStyle
        onClick={() => handleClick(target)}
        sx={{
          cursor: 'pointer',
          ...(isActive(path) && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    );
  }

  return (
    <NextLink href={path} passHref>
      <LinkStyle
        sx={{
          ...(isActive(path) && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}
