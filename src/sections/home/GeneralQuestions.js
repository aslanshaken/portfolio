import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/Iconify';
import Container from 'src/components/Container';
import styled from '@emotion/styled';

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
  const [expanded, setExpanded] = useState(0);
  const handleChange = (index, status) => {
    if (status) setExpanded(index);
    else setExpanded(0);
  };

  return (
    <RootStyle>
      <Container>
        <Typography textAlign={'center'} variant={'h3'} mb={4}>
          General questions
        </Typography>
        {accordions.map((item, _i) => (
          <Accordion
            key={`panel${_i}`}
            expanded={expanded === _i + 1}
            onChange={(ev, status) => handleChange(_i + 1, status)}
            sx={{ background: 'transparent' }}
          >
            <AccordionSummary
              expandIcon={<Iconify icon={'material-symbols:keyboard-arrow-up'} width={20} height={20} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="subtitle1">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption">{item.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </RootStyle>
  );
}
