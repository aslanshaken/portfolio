import { useEffect, useMemo } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
// @mui
import { Box, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useNotify from 'src/hooks/useNotify';

export default function AccountInformationForm() {
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
        <Typography variant={'h4'} gutterBottom>
          {'Personal information'}
        </Typography>

        <RHFTextField name="full_name" label="Full name" />
        <RHFTextField name="last_name" label="Last name" />
        <RHFTextField name="phone_number" label="Phone number" />
        <RHFTextField name="email_address" label="Email address" type="email" />
      </Stack>

      <Stack spacing={3} mt={5}>
        <Typography variant={'h4'} gutterBottom>
          {'Address'}
        </Typography>

        <RHFTextField name="address" label="Address" />
        <RHFTextField name="apartment" label="Apartment" />
        <RHFTextField name="state" label="State" />
        <RHFTextField name="city" label="City" />
        <RHFTextField name="zip" label="ZIP" />
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