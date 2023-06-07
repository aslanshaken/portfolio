import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
import useCollapseDrawer from '../../../hooks/useCollapseDrawer';
// utils
// config
import { NAVBAR } from '../../../config';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
import { IconButtonAnimate } from '../../../components/animate';
//
import navConfig from './NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

export default function NavbarVertical() {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'md');

  const { isCollapse, collapseClick, onHoverEnter, onHoverLeave } = useCollapseDrawer();

  const renderContent = (
    <Scrollbar
      sx={{
        // height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <NavSectionVertical navConfig={navConfig} isCollapse={isCollapse} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  useEffect(() => {
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <RootStyle
      sx={{
        minHeight: 400,
        zIndex: 1000,
        width: {
          md: isCollapse ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Box position={'absolute'} top={-15} left={10}>
          <IconButtonAnimate onClick={() => setIsOpen(true)} position={'absolute'}>
            <Iconify icon={'material-symbols:double-arrow'} />
          </IconButtonAnimate>
          <Drawer open={isOpen} onClose={() => setIsOpen(false)} PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}>
            {renderContent}
          </Drawer>
        </Box>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              borderTopRightRadius: 15,
              border: 0,
              position: 'absolute',
              width: NAVBAR.DASHBOARD_WIDTH,
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              boxShadow: (theme) => theme.customShadows.z6,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
