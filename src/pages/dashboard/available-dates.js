// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Iconify from 'src/components/Iconify';
// sections

// ----------------------------------------------------------------------

AvailableDatesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AvailableDatesPage() {
  const [expanded, setExpanded] = useState(0);
  const handleChange = (index, status) => {
    if (status) setExpanded(index);
    else setExpanded(0);
  };

  return (
    <Page title="Personal Account : Dashboard">
      <Stack gap={2}>
        <Typography variant="subtitle1">Available dates</Typography>
        <Divider />
        <Accordion onChange={(ev, status) => handleChange(1, status)} sx={{ background: 'transparent' }}>
          <AccordionSummary
            sx={{ background: 'lightGray' }}
            expandIcon={<Iconify icon={'material-symbols:keyboard-arrow-down'} width={20} height={20} />}
          >
            <Typography sx={{ m: 'auto' }} textAlign={'center'} variant="subtitle1">
              06/07/2023
            </Typography>
          </AccordionSummary>
          <AccordionDetails>dfd</AccordionDetails>
        </Accordion>
      </Stack>
    </Page>
  );
}
