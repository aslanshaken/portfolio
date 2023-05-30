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
  const [tempCategory, setTempCategory] = useState();
  const [changeDeliveryDateDialogIsOpen, setChangeDeliveryDateDialogIsOpen] = useState(false);
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;
  const router = useRouter();
  const { cityId, cuisineId, chefId } = router.query;
  const [loading, setLoading] = useState(false);

  const handleChange = (data) => {
    setSelectedTime(data.target.value);
  };

  const onSubmit = async () => {
    setLoading(true);
    if (selectedDate !== tempCategory && cart.length > 0) {
      setChangeDeliveryDateDialogIsOpen(true);
    } else {
      setSelectedDate(tempCategory);
      dispatch(setScheduleTime(selectedTime));
    }
    await dispatch(getFoodsByChef(cityId, cuisineId, chefId, format(new Date(tempCategory), 'MM/dd/yyyy')));
    setLoading(false);
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
    if (other.open) {
      setSelectedTime(tempCategory === selectedDate ? selectedTime : slots[0]);
      console.log('selectedTime: ', selectedTime);
    }
  }, [tempCategory, other.open]);

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
                    {categories?.map((item) => (
                      <Button
                        onClick={() => {
                          setTempCategory(item);
                        }}
                        variant={tempCategory === item ? 'contained' : 'outlined'}
                        color="secondary"
                        key={item?.id}
                        sx={{ px: { sm: 6, xs: 3 }, whiteSpace: 'nowrap' }}
                      >
                        {format(new Date(item), 'MMM d')}
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
                        <MenuItem key={_i} value={item}>
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
