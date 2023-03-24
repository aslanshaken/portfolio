import PropTypes from 'prop-types';
import { Card, Grid } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useState } from 'react';
import { Box } from '@mui/system';
import { StaticDatePicker } from '@mui/lab';
import styled from '@emotion/styled';

//
DeliverySchedulePanel.propTypes = {
  data: PropTypes.object,
};
DeliverySchedulePanel.defaultProps = {
  data: {},
};

const times = [
  {
    id: '1',
    label: '08AM-10AM',
  },
  {
    id: '2',
    label: '10AM-12PM',
  },
  {
    id: '3',
    label: '12PM-2PM',
  },
  {
    id: '4',
    label: '2PM-4PM',
  },
  {
    id: '5',
    label: '4PM-6PM',
  },
  {
    id: '6',
    label: '6PM-8PM',
  },
  {
    id: '7',
    label: '8PM-10PM',
  },
  {
    id: '8',
    label: '10PM-12AM',
  },
  {
    id: '9',
    label: '12AM-2AM',
  },
  {
    id: '10',
    label: '2AM-4AM',
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
  '.css-1v994a0':{
    marginRight:'12px'
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

export default function DeliverySchedulePanel() {
  const [activedTime, setAcitvedTime] = useState(times[3].id);
  const [date, setDate] = useState(new Date);

  return (
    <Card>
      <CardHeader variant="contained" icon="jam:pen-f" title="Delivery Schedule" />
      <Grid px={3} py={2} display={'flex'} flexWrap={{ md: 'nowrap', xs: 'wrap' }} gap={4}>
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
        <Box display="flex" flexWrap={'wrap'} gap={3}>
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
      </Grid>
    </Card>
  );
}
