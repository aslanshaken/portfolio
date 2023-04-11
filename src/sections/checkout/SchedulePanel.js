import PropTypes from 'prop-types';
import { Button, Card, Stack, Typography } from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useState } from 'react';
import { Box } from '@mui/system';
import { StaticDatePicker } from '@mui/lab';
import styled from '@emotion/styled';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { isToday } from 'date-fns';

//
SchedulePanel.propTypes = {
  data: PropTypes.object,
};
SchedulePanel.defaultProps = {
  data: {},
};

const initialTimes = [
  {
    id: '1',
    label: '09AM-12AM',
  },
  {
    id: '2',
    label: '1AM-4PM',
  },
  {
    id: '3',
    label: '5PM-8PM',
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

export default function SchedulePanel({ isPickup, onClose, subtitle }) {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { deliveryDate } = checkout;
  const isDateToday = isToday(new Date(deliveryDate));

  const now = new Date();

  const currentHour = now.getHours(); // get the current hour

  // filter the array by checking if the label contains a time that is after the current hour
  const times = isDateToday
    ? initialTimes.filter((time) => {
        const [start, end] = time.label.split('-'); // split the label into start and end times
        return Number.parseInt(start) > currentHour; // compare the start time with the current hour
      })
    : initialTimes;

  const dateSchedule = new Date(checkout?.orderDetail?.items[0].selected_day);

  const [activedTime, setAcitvedTime] = useState(times[0]);

  return (
    <Card>
      <CardHeader
        subtitle={subtitle}
        icon="jam:pen-f"
        title={`${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}`}
      />
      <Stack direction={'row'} px={3} flexWrap={'wrap'} py={2} gap={2} justifyContent={'space-around'}>
        {times.length == 0 ? (
          <Typography variant='caption' color={'gray'} textAlign={'left'} width={'100%'}>There is no available times.</Typography>
        ) : (
          times.map((item) => (
            <Box
              key={item.id}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              width={150}
              height={40}
              color={item.id === activedTime.id ? '#506C60' : 'rgba(80, 108, 96, 0.5)'}
              bgcolor={item.id === activedTime.id ? '#C1DED1' : 'rgba(193, 222, 209, 0.28)'}
              borderRadius={2}
              sx={{ cursor: 'pointer' }}
              onClick={() => setAcitvedTime(item)}
            >
              {item.label}
            </Box>
          ))
        )}
      </Stack>
      {/* <Box sx={{ display: 'flex', p: 2, gap: { xs: 4, sm: 0 }, justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Box>
          <DatePicker>
            <StaticDatePicker
              renderInput={(params) => <Box {...params} />}
              dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
              showDaysOutsideCurrentMonth
              value={dateSchedule}
              // onChange={(newValue) => {
              //   setDate(newValue);
              // }}
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
          <Button
            onClick={onClose}
            type="submit"
            size="large"
            variant="outlined"
            color="secondary"
            sx={{ px: 8, mt: 4, width: 'fit-content' }}
          >
            Save
          </Button>
        </Box>
      </Box> */}
    </Card>
  );
}
