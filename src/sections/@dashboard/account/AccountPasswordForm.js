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
import axios from 'src/utils/axios';

export default function AccountPasswordForm() {
  const [isDisable, setIsdisable] = useState(true);

  const { successAlert, errorAlert } = useNotify();

  const [showPassword, setShowPassword] = useState(false);

  const CustomVocabularyScahema = Yup.object().shape({
    custom_vocabulary: Yup.string(),
    old_password: Yup.string().required('Old Password is required'),
    new_password: Yup.string().required('New Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref("new_password")], "Passwords do not match"),
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
      const response = await axios.post(`/api/${process.env.API_VERSION}/users/update_password  `, {
        password: data.new_password,
      });
      successAlert();
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
          <Button sx={{ color: 'black', fontWeight: 'normal' }} onClick={() => setIsdisable(!isDisable)}>
            edit
          </Button>
        </Stack>

        <RHFTextField
          disabled={isDisable}
          name="old_password"
          label="Old password"
          type={showPassword ? 'text' : 'password'}
        />
        <RHFTextField
          disabled={isDisable}
          name="new_password"
          label="New password"
          type={showPassword ? 'text' : 'password'}
        />
        <RHFTextField
          disabled={isDisable}
          name="confirm_password"
          label="Confirm password"
          type={showPassword ? 'text' : 'password'}
        />
      </Stack>

      <Box mt={5} />

      <LoadingButton
        {...(!isDisable && {
          type: 'submit',
        })}
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
