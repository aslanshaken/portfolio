import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from 'src/components/Container';
import styled from '@emotion/styled';
import AccordionGroup from 'src/components/AccordionGroup';
import { useDispatch, useSelector } from 'src/redux/store';
import { CITYCUISINE_SELECTOR, getFaqs } from 'src/redux/slices/city';

const RootStyle = styled('div')(() => ({
  position: 'relative',
  '& .Mui-expanded': {
    boxShadow: 'none',
  },
}));

export default function GeneralQuestions() {
  const dispatch = useDispatch();
  const { faqs: accordions } = useSelector(CITYCUISINE_SELECTOR);
  const commonlyFaqs = accordions.filter((a) => a.topic === 'General Question');

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  return (
    <RootStyle>
      <Container>
        <Typography textAlign={'center'} variant={'h3'} my={4}>
          General questions
        </Typography>
        <AccordionGroup data={commonlyFaqs} />
      </Container>
    </RootStyle>
  );
}
