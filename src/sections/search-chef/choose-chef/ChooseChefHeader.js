import styled from '@emotion/styled';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import Container from 'src/components/Container';
import Image from 'src/components/Image';
import { HEADER } from 'src/config';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingTop: HEADER.MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

export default function ChooseChefHeader() {
  return (
    <RootStyle>
      <Container>
        <Breadcrumbs separator="->" sx={{ fontWeight: 600, py: 2 }}>
          <Link color="inherit" href="#">
            Austin
          </Link>
          <Typography fontWeight={600}>Central Asia cuisine</Typography>
        </Breadcrumbs>
        <Image src="/assets/search-chef/chefs/hero-header.png" alt="header-image" sx={{ height: 150 }} />
      </Container>
    </RootStyle>
  );
}
