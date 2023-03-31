import { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
// @mui
import { Box, Button, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useNotify from 'src/hooks/useNotify';

export default function AccountInformationForm() {
  const [isDisablePersonalInfo, setIsDisablePersonalInfo] = useState(true);
  const [isDisableAddress, setDisableAddress] = useState(true);
  const { successAlert, errorAlert } = useNotify();

  const CustomVocabularyScahema = Yup.object().shape({
    custom_vocabulary: Yup.string(),
  });

  const defaultValues = {
    // custom_vocabulary: currentData?.custom_vocabulary ?? '',
  };

  const methods = useForm({
    resolver: yupResolver(CustomVocabularyScahema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error.message);
      errorAlert(error.message);
    }
  };

  // useEffect(() => {
  //   reset({ ...defaultValues });
  // }, [currentData]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mt={5}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant={'h4'} gutterBottom>
            {'Personal information'}
          </Typography>
          <Button sx={{ color: 'black', fontWeight: 'normal' }} onClick={() => setIsDisablePersonalInfo(false)}>
            edit
          </Button>
        </Stack>

        <RHFTextField disabled={isDisablePersonalInfo} name="full_name" label="Full name" />
        <RHFTextField disabled={isDisablePersonalInfo} name="last_name" label="Last name" />
        <RHFTextField disabled={isDisablePersonalInfo} name="username" label="Username" />
        <RHFTextField disabled={isDisablePersonalInfo} name="phone_number" label="Phone number" />
        <RHFTextField disabled={isDisablePersonalInfo} name="email_address" label="Email address" type="email" />
        <RHFTextField disabled={isDisablePersonalInfo} name="instagram" label="Instagram" />
        <RHFTextField disabled={isDisablePersonalInfo} name="facebook" label="Facebook" />
      </Stack>

      <Box mt={5} />

      <LoadingButton
        type="submit"
        variant="outlined"
        loading={isSubmitting}
        // disabled={!isDirty}
        size="large"
        sx={{ color: 'common.black', px: 5 }}
      >
        {'Save'}
      </LoadingButton>

      <Stack spacing={3} mt={5}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography variant={'h4'} gutterBottom>
            {'Address'}
          </Typography>
          <Button sx={{ color: 'black', fontWeight: 'normal' }} onClick={() => setDisableAddress(false)}>
            edit
          </Button>
        </Stack>

        <RHFTextField disabled={isDisableAddress} name="address" label="Address" />
        <RHFTextField disabled={isDisableAddress} name="apartment" label="Apartment" />
        <RHFTextField disabled={isDisableAddress} name="state" label="State" />
        <RHFTextField disabled={isDisableAddress} name="city" label="City" />
        <RHFTextField disabled={isDisableAddress} name="zip" label="ZIP" />
      </Stack>

      <Box mt={5} />

      <LoadingButton
        type="submit"
        variant="outlined"
        loading={isSubmitting}
        // disabled={!isDirty}
        size="large"
        sx={{ color: 'common.black', px: 5 }}
      >
        {'Save'}
      </LoadingButton>
    </FormProvider>
  );
}
