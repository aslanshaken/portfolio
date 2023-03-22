import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
// @mui
import { Box, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useNotify from 'src/hooks/useNotify';
import Iconify from 'src/components/Iconify';

export default function AccountPasswordForm() {
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
          {'Update password'}
        </Typography>

        <RHFTextField
          name="password"
          hiddenLabel
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'ph:eye-slash-light' : 'ic:outline-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
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
