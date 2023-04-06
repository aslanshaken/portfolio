import React from 'react';
import NextLink from 'next/link';
import { Container, Link, Typography } from '@mui/material';

export default function BackToHomePage() {
  return (
    <Container maxWidth={'md'}>
      <NextLink href={'/'} passHref>
        <Link>
          <Typography mt={2} sx={{ color: 'black' }} className="sign-up">
            Back to home page
          </Typography>
        </Link>
      </NextLink>
    </Container>
  );
}
