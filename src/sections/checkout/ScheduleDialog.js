import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Dialog,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import CardHeader from '../../components/card/CardHeader';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { LoadingButton, StaticDatePicker } from '@mui/lab';
import styled from '@emotion/styled';
import { dispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getOrderDetail, setScheduleTime, updateScheduleTime } from 'src/redux/slices/food';
import { format, isTomorrow, parse, addHours, getHours } from 'date-fns';
import Iconify from 'src/components/Iconify';
import useNotify from 'src/hooks/useNotify';

//
ScheduleDialog.propTypes = {
  data: PropTypes.object,
};
ScheduleDialog.defaultProps = {
  data: {},
};

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

export default function ScheduleDialog({ isPickup, subtitle, ...other }) {
  const { successAlert, errorAlert } = useNotify();

  const { checkout } = useSelector(FOOD_SELECTOR);

  const { deliveryDate, orderId } = checkout;

  const [isLoading, setIsLoading] = useState(false);

  const scheduleTime = checkout?.orderDetail?.schedule_time;

  const [selectedTime, setSelectedTime] = useState(scheduleTime ?? null);

  const slots = checkout?.orderDetail?.schedule_slots;

  const isDateTomorrow = isTomorrow(new Date(deliveryDate));

  const handleChange = (data) => {
    setSelectedTime(data.target.value);
  };

  // filter the array by checking if the label contains a time that is after the current hour
  const times = isDateTomorrow
    ? slots?.filter((time) => {
        const timeString = time;
        const date = new Date(`2000-01-01 ${timeString}`);
        const formattedTime = format(date, 'HH');
        const currentDate = new Date();
        const futureDate = addHours(currentDate, 17);
        const hourAfter17Hours = getHours(futureDate);
        return formattedTime > hourAfter17Hours; // compare the start time with the current hour
      })
    : slots;

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await dispatch(updateScheduleTime(orderId, selectedTime));
      successAlert(response.success);
      await dispatch(getOrderDetail(orderId));
      setIsLoading(false);
      other.onClose();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
        <Iconify icon={'iconoir:cancel'} />
      </IconButton>
      <Stack p={{ xs: 3, sm: 8 }}>
        <Typography variant="h3">Choose a time</Typography>
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={{ xs: 'center', sm: 'flex-start' }} py={4} gap={4}>
          {times?.length == 0 ? (
            <Typography variant="caption" color={'gray'} textAlign={'left'} width={'100%'}>
              There is no available times.
            </Typography>
          ) : (
            <FormControl sx={{ width: 1 }}>
              <Select
                fullWidth
                value={selectedTime}
                defaultValue={selectedTime}
                onChange={handleChange}
                style={{ width: '100%' }}
                MenuProps={{
                  anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                  sx: { maxHeight: 300, mt: 1 },
                }}
              >
                {times?.map((item, _i) => (
                  <MenuItem key={item + _i} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Stack>

        <LoadingButton
          loading={isLoading}
          type="submit"
          size="large"
          variant="outlined"
          color="secondary"
          style={{ width: 'fit-content' }}
          onClick={onSubmit}
        >
          Save
        </LoadingButton>
      </Stack>
    </Dialog>
    // <Card>
    //   <CardHeader
    //     subtitle={subtitle}
    //     icon="jam:pen-f"
    //     title={`${isPickup ? 'Pick Up Schedule' : 'Delivery Schedule'}`}
    //   />
    //   <Stack direction={'row'} px={3} flexWrap={'wrap'} justifyContent={'space-around'} py={2} gap={2}>
    //     {times?.length == 0 ? (
    //       <Typography variant="caption" color={'gray'} textAlign={'left'} width={'100%'}>
    //         There is no available times.
    //       </Typography>
    //     ) : (
    //       times?.map((item, _i) => (
    //         <Box
    //           key={item + _i}
    //           display={'flex'}
    //           alignItems={'center'}
    //           justifyContent={'center'}
    //           width={150}
    //           height={40}
    //           color={item === scheduleTime ? '#506C60' : 'rgba(80, 108, 96, 0.5)'}
    //           bgcolor={item === scheduleTime ? '#C1DED1' : 'rgba(193, 222, 209, 0.28)'}
    //           borderRadius={2}
    //           sx={{ cursor: 'pointer' }}
    //           onClick={async () => {
    //             await dispatch(updateScheduleTime(orderId, item));
    //             dispatch(getOrderDetail(orderId));
    //           }}
    //         >
    //           {item}
    //         </Box>
    //       ))
    //     )}
    //   </Stack>
    //   {/* <Box sx={{ display: 'flex', p: 2, gap: { xs: 4, sm: 0 }, justifyContent: 'space-around', flexWrap: 'wrap' }}>
    //     <Box>
    //       <DatePicker>
    //         <StaticDatePicker
    //           renderInput={(params) => <Box {...params} />}
    //           dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
    //           showDaysOutsideCurrentMonth
    //           value={dateSchedule}
    //           // onChange={(newValue) => {
    //           //   setDate(newValue);
    //           // }}
    //         />
    //       </DatePicker>
    //     </Box>
    //     <Box sx={{ my: 'auto', display: 'flex', flexFlow: 'column', gap: 4 }}>
    //       {times.map((item) => (
    //         <Box
    //           key={item.id}
    //           display={'flex'}
    //           alignItems={'center'}
    //           justifyContent={'center'}
    //           width={150}
    //           height={40}
    //           color={item.id === activedTime ? '#506C60' : 'rgba(80, 108, 96, 0.5)'}
    //           bgcolor={item.id === activedTime ? '#C1DED1' : 'rgba(193, 222, 209, 0.28)'}
    //           borderRadius={2}
    //           sx={{ cursor: 'pointer' }}
    //           onClick={() => setAcitvedTime(item.id)}
    //         >
    //           {item.label}
    //         </Box>
    //       ))}
    //       <Button
    //         onClick={onClose}
    //         type="submit"
    //         size="large"
    //         variant="outlined"
    //         color="secondary"
    //         sx={{ px: 8, mt: 4, width: 'fit-content' }}
    //       >
    //         Save
    //       </Button>
    //     </Box>
    //   </Box> */}
    // </Card>
  );
}
