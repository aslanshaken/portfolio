import PropTypes from 'prop-types';
import { Button, Dialog, FormControl, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { dispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, setScheduleTime, updateFoodCart } from 'src/redux/slices/food';
import { format, parse, addHours, getHours, isToday, isTomorrow } from 'date-fns';
import Iconify from 'src/components/Iconify';
import ChangeDeliveryDateDialgo from '../search-chef/chef-detail/ChangeDeliveryDateDialgo';

//
ScheduleDialog.propTypes = {
  data: PropTypes.object,
};
ScheduleDialog.defaultProps = {
  data: {},
};

export default function ScheduleDialog({ setSelectedDate, selectedDate, selectedTime, setSelectedTime, ...other }) {
  const [tempCategory, setTempCategory] = useState();
  const [changeDeliveryDateDialogIsOpen, setChangeDeliveryDateDialogIsOpen] = useState(false);
  const { checkout, foods } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;
  const [todaySlots, setTodaySlots] = useState();
  const [slots, setSlots] = useState();

  const handleChange = (data) => {
    setSelectedTime(data.target.value);
  };

  const onSubmit = () => {
    if (selectedDate !== tempCategory && cart.length > 0) {
      setChangeDeliveryDateDialogIsOpen(true);
    } else {
      setSelectedDate(tempCategory);
      dispatch(setScheduleTime(selectedTime));
    }
    other.onClose();
  };

  const setCategory = () => {
    setSelectedDate(tempCategory);
    dispatch(updateFoodCart({ actionType: 'clear' }));
    setChangeDeliveryDateDialogIsOpen(false);
  };

  useEffect(() => {
    if (selectedDate) {
      setTempCategory(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (foods && selectedDate) {
      const today = new Date();
      const formattedDate = format(today, 'MM/dd/yy');
      const futureDate = addHours(today, 5);
      const isTodayFutureDate = isToday(futureDate);
      const times = isTodayFutureDate
        ? foods?.[formattedDate]?.[0]?.time_slots?.filter((item) => {
            const dateObj = parse(item, 'h:mm a', today);
            const formattedTime = format(dateObj, 'HH');
            const hourAfter5Hours = getHours(futureDate);
            return formattedTime > hourAfter5Hours;
          })
        : [];
      setTodaySlots(times);
      const isFutureToday = isToday(futureDate);
      const time_slots = foods?.[selectedDate]?.[0]?.time_slots;
      setSlots(isFutureToday ? times : time_slots);
    }
  }, [foods, selectedDate]);

  useEffect(() => {
    const fomrattedDate = new Date(tempCategory);
    const isFutureToday = isToday(fomrattedDate);
    const time_slots = foods?.[tempCategory]?.[0]?.time_slots;
    setSlots(isFutureToday ? todaySlots : time_slots);
    setSelectedTime(selectedDate === tempCategory ? selectedTime : isFutureToday ? todaySlots[0] : time_slots[0]);
  }, [tempCategory, other.open]);

  const categories = Object.keys(foods)
    .sort((a, b) => new Date(a) - new Date(b))
    .map((key, _i) => {
      const selectedDateIsToday = isToday(new Date(key));
      const selectedDateIsTomorrow = isTomorrow(new Date(key));
      const formattedDate = format(new Date(key), 'MMMM d');
      return {
        id: _i,
        label: selectedDateIsToday ? 'Today' : selectedDateIsTomorrow ? 'Tomorrow' : formattedDate,
        date: format(new Date(key), 'MM/dd/yy'),
      };
    })
    .filter(
      todaySlots?.length === 0
        ? (item) => new Date(item?.date) > new Date().setHours(0, 0, 0, 0)
        : (item) => new Date(item?.date) >= new Date().setHours(0, 0, 0, 0)
    );

  return (
    <>
      <ChangeDeliveryDateDialgo
        open={changeDeliveryDateDialogIsOpen}
        onSubmit={setCategory}
        onClose={() => setChangeDeliveryDateDialogIsOpen(false)}
      />
      <Dialog maxWidth={'sm'} fullWidth {...other}>
        <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
        <Stack p={{ xs: 3, sm: 8 }}>
          <Typography variant="h3">Select a time</Typography>
          <Stack direction={'row'} flexWrap={'wrap'} justifyContent={{ xs: 'center', sm: 'flex-start' }} py={4} gap={4}>
            {categories?.length == 0 ? (
              <Typography variant="caption" color={'gray'} textAlign={'left'} width={'100%'}>
                There is no available dates.
              </Typography>
            ) : (
              <FormControl sx={{ width: 1 }}>
                <Stack direction={'row'} gap={4}>
                  <Stack gap={1}>
                    {categories?.map((item) => (
                      <Button
                        onClick={() => {
                          setSlots(foods?.[item.date]?.[0]?.time_slots);
                          setTempCategory(item?.date);
                        }}
                        variant={tempCategory === item.date ? 'contained' : 'outlined'}
                        color="secondary"
                        key={item?.id}
                        sx={{ px: { sm: 6, xs: 3 }, whiteSpace: 'nowrap' }}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </Stack>
                  <Stack justifyContent={'space-between'} width={'100%'}>
                    <Select
                      value={selectedTime}
                      defaultValue={selectedTime}
                      onChange={handleChange}
                      style={{ width: '100%', height: 38 }}
                      MenuProps={{
                        anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                        sx: { maxHeight: 250, mt: 1 },
                      }}
                    >
                      {slots?.map((item, _i) => (
                        <MenuItem key={item + _i} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>

                    <LoadingButton onClick={onSubmit} variant="contained" color="secondary">
                      Save
                    </LoadingButton>
                  </Stack>
                </Stack>
              </FormControl>
            )}
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
}
