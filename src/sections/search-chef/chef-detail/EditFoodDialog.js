import * as Yup from 'yup';
//next
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Box,
  Alert
} from '@mui/material';
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import { dispatch } from 'src/redux/store';
import { updateFoodItem, startReloading } from 'src/redux/slices/food';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RHFTextField, RHFTextArea, RHFNumberField, RHFDropdown } from '../../../components/hook-form';
import FormProvider from '../../../components/hook-form/FormProvider';

export default function EditFoodDialog({ data, foods, setSelectedItemData, ...other }) {
  const [errorMsg, setErrorMsg] = useState();

  const FoodSchema = Yup.object().shape({
    title: Yup.string(),
    measurement: Yup.string(),
    minOrder: Yup.number(),
    quantity: Yup.number(),
    ingredients: Yup.string(),
    description: Yup.string(),
    price: Yup.number(),
  });

  const defaultValues = {
    id: data?.id,
    title: data?.title,
    measurement: data?.measurement,
    minOrder: data?.min_order,
    quantity: data?.quantity,
    price: data?.current_price,
    ingredients: data?.ingredients,
    description: data?.description,
  };

  const methods = useForm({
    resolver: yupResolver(FoodSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    try {
      if(data && data?.id ){
        await dispatch(updateFoodItem(data, data?.id));
        other.onClose();
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

  useEffect(() => {
    reset(defaultValues);
  }, [data]);

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <DialogContent sx={{ padding: 0 }}>
        <IconButton
          onClick={other.onClose}
          width={'fit-content'}
          sx={{ background: 'white', position: 'absolute', right: 10, top: 10, color: 'black', zIndex: 10 }}
        >
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
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
              <Image src={data?.image_url} alt="Cuisine Splash" style={{ width: '100%', height: 400 }} />
              <div style={{ padding: '1rem' }}>
                <Grid container justifyContent={'space-between'}>
                  <Grid item xs={12}>
                    <RHFTextField 
                      name="title"
                      label="Title"
                    />
                  </Grid>
                </Grid>
                <Box sx={{mt: 2}}>
                  <RHFTextArea 
                    name="description"
                    label="Description"
                  />
                </Box>
                <Box sx={{mt: 2}}>
                  <RHFTextArea
                    name="ingredients"
                    label="Ingredients"
                  />
                </Box>
                <Grid container sx={{mt: 2}} justifyContent={'space-between'}>
                  <Grid item xs={5}>
                    <RHFNumberField 
                      name="price"
                      label="Price"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <RHFNumberField 
                      name="minOrder"
                      label="Minimum Order"
                    />
                  </Grid>
                </Grid>

                <Grid container sx={{mt: 2}} justifyContent={'space-between'}>
                  <Grid item xs={5}>
                    <RHFNumberField 
                      name="quantity"
                      label="Measurement Size"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <RHFDropdown 
                      name="measurement"
                      label="Measurement"
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
                  {'Update Food'}
                </LoadingButton>
              </div>
            </div>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
