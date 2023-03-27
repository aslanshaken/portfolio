import PropTypes from 'prop-types';
import { Card, Grid } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useState } from 'react';
import { Box } from '@mui/system';
import { StaticDatePicker } from '@mui/lab';
import styled from '@emotion/styled';

//
SchedulePanel.propTypes = {
  data: PropTypes.object,
};
SchedulePanel.defaultProps = {
  data: {},
};

const times = [
  {
    id: '1',
    label: '09AM-11AM',
  },
  {
    id: '2',
    label: '12AM-5PM',
  },
  {
    id: '3',
    label: '6PM-9PM',
  },
];

const DatePicker = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  '.css-1dozdou': {
    margin: '0',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    background: theme.palette.gradients.secondary,
    paddingTop: '26px',
    paddingBottom: '26px',
    color: 'white',
    position: 'relative',
    display: 'felx',
    justifyContent: 'center',
  },
  '.css-1n2mv2k': {
    background: '#E8E8E8',
  },
  '.css-1v994a0': {
    marginRight: '12px',
  },
  '.MuiTypography-caption': {
    color: 'white',
  },
  '.MuiIconButton-root': {
    color: 'white',
    background: 'transparent !important',
  },
  '.css-u0c4x7': {
    position: 'absolute',
    margin: 'auto',
  },
  '.PrivatePickersToolbar-root': {
    display: 'none',
  },
  '.Mui-selected': {
    background: `${theme.palette.gradients.secondary} !important`,
  },
  '.css-k008qs': {
    width: '100%',
    marginRight: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.MuiButtonBase-root': {
    background: '#F7F7F7',
  },
  '.css-1wa556w-MuiButtonBase-root-MuiIconButton-root': {
    display: 'none',
  },
  '.css-1bx5ylf:nth-of-type(2)': {
    display: 'none',
  },
  '.PrivatePickersFadeTransitionGroup-root': {
    overflow: 'hidden',
  },
  '.css-dhopo2': {
    background: '#F7F7F7',
  },
}));

export default function SchedulePanel({isPickup}) {
  const [activedTime, setAcitvedTime] = useState(times[1].id);
  const [date, setDate] = useState(new Date());

  return (
    <Card>
      <CardHeader
        variant="contained"
        icon="jam:pen-f"
        title={`${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}`}
      />
      <Box sx={{ display: 'flex', gap: { xs: 4, sm: 0 }, justifyContent: 'space-around', flexWrap: 'wrap', p: 2 }}>
        <Box>
          <DatePicker>
            <StaticDatePicker
              renderInput={(params) => <Box {...params} />}
              dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
              showDaysOutsideCurrentMonth
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
            />
          </DatePicker>
        </Box>
        <Box sx={{ my: 'auto', display: 'flex', flexFlow: 'column', gap: 4 }}>
          {times.map((item) => (
            <Box
              key={item.id}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              width={150}
              height={40}
              color={item.id === activedTime ? '#506C60' : 'rgba(80, 108, 96, 0.5)'}
              bgcolor={item.id === activedTime ? '#C1DED1' : 'rgba(193, 222, 209, 0.28)'}
              borderRadius={2}
              sx={{ cursor: 'pointer' }}
              onClick={() => setAcitvedTime(item.id)}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
}
