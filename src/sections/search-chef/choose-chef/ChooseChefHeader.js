import React from 'react';
import Container from 'src/components/Container';
import Image from 'src/components/Image';
import NavLinkHeader from 'src/components/NavLinkHeader';

export default function ChooseChefHeader() {
  return (
    <Container>
      <NavLinkHeader city="Austin" cuisine="Central Asia cuisine" />
      <Image src="/assets/search-chef/chefs/hero-header.png" alt="header-image" sx={{ height: 150 }} />
    </Container>
  );
}
