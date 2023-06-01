import PropTypes from 'prop-types';
import { Button, Dialog, FormControl, IconButton, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { dispatch, useSelector } from 'src/redux/store';
import { FOOD_SELECTOR, getFoodsByChef, setScheduleDate, setScheduleTime, updateFoodCart } from 'src/redux/slices/food';
import { format, parse, addHours, getHours, isToday, isTomorrow } from 'date-fns';
import Iconify from 'src/components/Iconify';
import ChangeDeliveryDateDialgo from '../search-chef/chef-detail/ChangeDeliveryDateDialgo';
import { useRouter } from 'next/router';

//
ScheduleDialog.propTypes = {
  data: PropTypes.object,
};
ScheduleDialog.defaultProps = {
  data: {},
};

export default function ScheduleDialog({
  setSelectedDate,
  selectedDate,
  selectedTime,
  setSelectedTime,
  categories,
  slots,
  ...other
}) {
  const [tempDate, setTempDate] = useState();
  const [tempTime, setTempTime] = useState(selectedTime);
  const [changeDeliveryDateDialogIsOpen, setChangeDeliveryDateDialogIsOpen] = useState(false);
  const { checkout, foods } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;
  const router = useRouter();
  const { cityId, cuisineId, chefId } = router.query;
  const [loading, setLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState(slots);

  const handleChange = (data) => {
    setTempTime(data.target.value);
  };

  const onSubmit = async () => {
    if (selectedDate !== tempDate && cart.length > 0) {
      setChangeDeliveryDateDialogIsOpen(true);
    } else {
      setLoading(true);
      setSelectedDate(tempDate);
      setSelectedTime(tempTime);
      dispatch(setScheduleTime(tempTime));
      await dispatch(getFoodsByChef(cityId, cuisineId, chefId, tempDate));
      other.onClose();
      setLoading(false);
    }
  };

  const setCategory = async () => {
    setLoading(true);
    setSelectedDate(tempDate);
    setSelectedTime(tempTime);
    dispatch(setScheduleTime(tempTime));
    dispatch(updateFoodCart({ actionType: 'clear' }));
    setChangeDeliveryDateDialogIsOpen(false);
    await dispatch(getFoodsByChef(cityId, cuisineId, chefId, tempDate));
    setLoading(false);
    other.onClose();
  };

  useEffect(() => {
    if (selectedDate) {
      setTempDate(selectedDate);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (other.open) {
      const temp = tempDate === categories[0] ? slots : foods?.[categories[1]]?.slots;
      setTimeSlots(temp);
      setTempTime(tempDate === selectedDate ? selectedTime : temp[0]);
    }
  }, [tempDate, other.open]);

  useEffect(() => {
    setTempDate(selectedDate);
  }, [other.open]);

  return (
    <>
      <ChangeDeliveryDateDialgo
        open={changeDeliveryDateDialogIsOpen}
        onSubmit={setCategory}
        onClose={async () => {
          other.onClose();
          setChangeDeliveryDateDialogIsOpen(false);
        }}
      />
      <Dialog maxWidth={'sm'} fullWidth {...other}>
        <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
        <Stack p={{ xs: 3, sm: 8 }}>
          <Typography variant="h3">Select a new time</Typography>
          <Stack direction={'row'} flexWrap={'wrap'} justifyContent={{ xs: 'center', sm: 'flex-start' }} py={4} gap={4}>
            {categories?.length == 0 ? (
              <Typography variant="caption" color={'gray'} textAlign={'left'} width={'100%'}>
                There is no available dates.
              </Typography>
            ) : (
              <FormControl sx={{ width: 1 }}>
                <Stack direction={'row'} gap={4}>
                  <Stack gap={1}>
                    {categories?.map((item, _i) => (
                      <Button
                        onClick={() => {
                          setTempDate(item);
                        }}
                        variant={tempDate === item ? 'contained' : 'outlined'}
                        color="secondary"
                        key={item + _i}
                        sx={{ px: { sm: 6, xs: 3 }, whiteSpace: 'nowrap' }}
                      >
                        {format(new Date(item), 'MMM d')}
                      </Button>
                    ))}
                  </Stack>
                  <Stack justifyContent={'space-between'} width={'100%'}>
                    <Select
                      value={tempTime}
                      defaultValue={tempTime}
                      onChange={handleChange}
                      style={{ width: '100%', height: 38 }}
                      MenuProps={{
                        anchorOrigin: { horizontal: 'center', vertical: 'bottom' },
                        sx: { maxHeight: 250, mt: 1 },
                      }}
                    >
                      {timeSlots?.map((item, _i) => (
                        <MenuItem key={item + _i} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>

                    <LoadingButton loading={loading} onClick={onSubmit} variant="contained" color="secondary">
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
