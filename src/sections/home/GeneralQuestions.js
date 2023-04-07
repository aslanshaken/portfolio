import React from 'react';
import Typography from '@mui/material/Typography';
import Container from 'src/components/Container';
import styled from '@emotion/styled';
import AccordionGroup from 'src/components/AccordionGroup';

const accordions = [
  {
    title: 'Vestibulum ac diam sit amet quam?',
    content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
  },
  {
    title: 'Curabitur aliquet quam id dui posuere blandit?',
    content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
  },
  {
    title: 'Nulla porttitor accumsan tincidunt ipsum?',
    content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
  },
  {
    title: 'Cras ultricies ligula sed magna dictum porta?',
    content: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
  },
];

const RootStyle = styled('div')(() => ({
  position: 'relative',
  '& .Mui-expanded': {
    boxShadow: 'none',
  },
}));

export default function GeneralQuestions() {
  return (
    <RootStyle>
      <Container>
        <Typography textAlign={'center'} variant={'h3'} mb={4}>
          General questions
        </Typography>
        <AccordionGroup data={accordions} />
      </Container>
    </RootStyle>
  );
}
