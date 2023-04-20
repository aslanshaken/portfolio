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
