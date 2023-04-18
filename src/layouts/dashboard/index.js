import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
// hooks
// config
import { HEADER, NAVBAR } from '../../config';
//
import NavbarVertical from './navbar/NavbarVertical';
import MainHeader from '../main/MainHeader';
import MainFooter from '../main/MainFooter';
import AuthGuard from 'src/guards/AuthGuard';

// ----------------------------------------------------------------------

const BodyStyle = styled(Stack)(({ theme }) => ({
  flex:1,
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
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(1),
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
  return (
    <AuthGuard>
      <Stack sx={{ minHeight: 1 }}>
        <MainHeader />

        <BodyStyle direction={'row'} position={'relative'}>
          <NavbarVertical />

          <MainStyle>{children}</MainStyle>
        </BodyStyle>

        <MainFooter />
      </Stack>
    </AuthGuard>
  );
}
