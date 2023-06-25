import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import AccordionGroup from 'src/components/AccordionGroup';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getFaqs } from 'src/redux/slices/city';

export default function ContactUsDescription() {
  const dispatch = useDispatch();
  const { faqs } = useSelector(CITYCUISINE_SELECTOR);
  const commonlyFaqs = faqs.filter((a) => a.topic === 'Commonly Asked Questions');

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  return (
    <Stack spacing={4} paddingBottom={7}>
      <Stack>
        <Typography variant={'h4'} mb={2} ml={1}>
          Commonly Asked Questions
        </Typography>
        <AccordionGroup data={commonlyFaqs} />
      </Stack>
    </Stack>
  );
}
