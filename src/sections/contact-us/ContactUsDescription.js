import React from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import AccordionGroup from 'src/components/AccordionGroup';

const accordions = [
  {
    title: 'General questions',
    content: [
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
    ],
  },
  {
    title: 'Financial topics',
    content: [
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
    ],
  },
  {
    title: 'Other questions',
    content: [
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
    ],
  },
];

export default function ContactUsDescription() {
  return (
    <Stack spacing={4}>
      {accordions.map((item, _i) => (
        <Stack key={_i}>
          <Typography variant={'h4'} mb={2} ml={1}>
            {item.title}
          </Typography>
          <AccordionGroup data={item.content} />
        </Stack>
      ))}
    </Stack>
  );
}
