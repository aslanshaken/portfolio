import * as Yup from 'yup';
//next
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Dialog, DialogContent, Stack, Grid, Alert } from '@mui/material';
import Iconify from 'src/components/Iconify';
import { dispatch } from 'src/redux/store';
import { createAvailableDate, startReloading } from 'src/redux/slices/food';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFNumberField, RHFFoodDropdown, RHFDatePicker } from '../../../components/hook-form';
import FormProvider from '../../../components/hook-form/FormProvider';

export default function AddNewDateDialog ({ onClose, ...other }) {
  const [errorMsg, setErrorMsg] = useState();

  const AvailableDateSchema = Yup.object().shape({
    date: Yup.string(),
    foodId: Yup.number(),
    maxOrder: Yup.number(),
  });

  const defaultValues = {
    date: '',
    foodId: null,
    maxOrder: 1,
  };

  const methods = useForm({
    resolver: yupResolver(AvailableDateSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    try {
      if(data){
        await dispatch(createAvailableDate(data));
        onClose();
        dispatch(startReloading());
      }
    } catch (error) {
      setErrorMsg(error.message);
      reset();
    }
  };

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;


  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <DialogContent sx={{ padding: '20px', position: 'relative' }}>
        <button onClick={onClose}>
          <Iconify icon={'ant-design:close'} sx={{ position: 'absolute', cursor: 'pointer', top: 10, right: 10, color: 'black' }} />
        </button>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {errorMsg && (
              <Alert
                severity="error"
                onClose={() => {
                  setErrorMsg();
                }}
              >
                {errorMsg}
              </Alert>
            )}
            <div>
              <div style={{ padding: '1rem' }}>
                <Grid container justifyContent={'space-between'}>
                  <Grid item xs={12}>
                    <RHFDatePicker
                      name="date"
                      label="Available Date"
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{mt: 2}} justifyContent={'space-between'}>
                  <Grid item xs={12}>
                    <RHFFoodDropdown 
                      name="foodId"
                      label="Select Food"
                      foodsarray={other.foodsarray}
                    />
                  </Grid>
                </Grid>
                <Grid container sx={{mt: 2}} justifyContent={'space-between'}>
                  <Grid item xs={12}>
                    <RHFNumberField 
                      name="maxOrder"
                      label="Maximum Order"
                    />
                  </Grid>
                </Grid>
                <div style={{ marginTop: '2rem' }} />

                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                  loading={false}
                  fullWidth
                >
                  {'Create Date'}
                </LoadingButton>
              </div>
            </div>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
