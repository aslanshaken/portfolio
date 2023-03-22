import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
// hooks
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from '../../config';
//
import NavbarVertical from './navbar/NavbarVertical';
import MainHeader from '../main/MainHeader';
import MainFooter from '../main/MainFooter';

// ----------------------------------------------------------------------

const BodyStyle = styled(Stack)(({ theme }) => ({
  marginTop: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 80,
  },
}));

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  const { collapseClick, isCollapse } = useCollapseDrawer();

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      <BodyStyle direction={'row'} position={'relative'} mt={5}>
        <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

        <MainStyle>{children}</MainStyle>
      </BodyStyle>

      <MainFooter />
    </Stack>
  );
}
