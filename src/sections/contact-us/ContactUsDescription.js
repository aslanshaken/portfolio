import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import AccordionGroup from 'src/components/AccordionGroup';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getFaqs } from 'src/redux/slices/city';

const accordions = [
  {
    title: 'General questions',
    content: [],
  },
  {
    title: 'Financial topics',
    content: [
      {
        question: 'Vestibulum ac diam sit amet quam?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Curabitur aliquet quam id dui posuere blandit?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Nulla porttitor accumsan tincidunt ipsum?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Lorem ipsum dolor sit amet?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Cras ultricies ligula sed magna dictum porta?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
    ],
  },
  {
    title: 'Other questions',
    content: [
      {
        question: 'Vestibulum ac diam sit amet quam?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Curabitur aliquet quam id dui posuere blandit?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Nulla porttitor accumsan tincidunt ipsum?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Lorem ipsum dolor sit amet?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
      {
        question: 'Cras ultricies ligula sed magna dictum porta?',
        answer: `Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat.
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus Nulla porttitor accumsan tincidunt.`,
      },
    ],
  },
];

export default function ContactUsDescription() {
  const dispatch = useDispatch();
  const { faqs } = useSelector(CITYCUISINE_SELECTOR);

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  accordions[0].content = faqs;

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
