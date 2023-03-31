import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
// @mui
import { Box, Button, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useNotify from 'src/hooks/useNotify';
import Iconify from 'src/components/Iconify';

export default function AccountPasswordForm() {
  const [isDisable, setIsdisable] = useState(true); 

  const { successAlert, errorAlert } = useNotify();

  const [showPassword, setShowPassword] = useState(false);

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
            {'Update password'}
          </Typography>
          <Button sx={{ color: 'black', fontWeight: 'normal' }} onClick={() => setIsdisable(false)}>
            edit
          </Button>
        </Stack>

        <RHFTextField
          disabled={isDisable}
          name="password"
          label="Current password"
          type={showPassword ? 'text' : 'password'}
        />
        <RHFTextField
          disabled={isDisable}
          name="password"
          label="New password"
          type={showPassword ? 'text' : 'password'}
        />
        <RHFTextField
          disabled={isDisable}
          name="password"
          label="Confirm new password"
          type={showPassword ? 'text' : 'password'}
        />
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
