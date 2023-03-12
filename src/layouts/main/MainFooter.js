// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Divider, Container } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  background: 'red'
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        footer
      </Container>
    </RootStyle>
  );
}
