import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Iconify from 'src/components/Iconify';
import styled from '@emotion/styled';

AccordionGroup.propTypes = {
  data: PropTypes.array,
};

const RootStyle = styled('div')(() => ({
  position: 'relative',
  '& .MuiPaper-root': {
    boxShadow: 'none !important',
  },
}));

export default function AccordionGroup({ data = [] }) {
  const [expanded, setExpanded] = useState(0);
  const handleChange = (index, status) => {
    if (status) setExpanded(index);
    else setExpanded(0);
  };

  return (
    <RootStyle>
      {data?.map((item, _i) => (
        <Accordion
          key={`panel${_i}`}
          expanded={expanded === _i + 1}
          onChange={(ev, status) => handleChange(_i + 1, status)}
          sx={{ background: 'transparent' }}
        >
          <AccordionSummary
            expandIcon={<Iconify icon={'material-symbols:keyboard-arrow-down'} width={20} height={20} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">{item?.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item?.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </RootStyle>
  );
}
