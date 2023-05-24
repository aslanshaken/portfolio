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
import useAuth from 'src/hooks/useAuth';
import Iconify from 'src/components/Iconify';

export default function AccountPasswordForm() {
  const [isDisable, setIsdisable] = useState(true);

  const { updatePassword } = useAuth();
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { successAlert, errorAlert } = useNotify();

  const CustomVocabularyScahema = Yup.object().shape({
    custom_vocabulary: Yup.string(),
    old_password: Yup.string().required('Old Password is required'),
    new_password: Yup.string().required('New Password is required'),
    confirm_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('new_password')], 'Passwords do not match'),
  });

  const defaultValues = {
    // custom_vocabulary: currentData?.custom_vocabulary ?? '',
  };

  const methods = useForm({
    resolver: yupResolver(CustomVocabularyScahema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await updatePassword(data);
      // successAlert(response.data.success);
    } catch (error) {
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
            {isDisable ? 'edit' : 'disable'}
          </Button>
        </Stack>

        <RHFTextField disabled={isDisable} name="old_password" label="Current password" type="password" />
        <RHFTextField
          disabled={isDisable}
          name="new_password"
          label="New password"
          type={showNewPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled={isDisable} edge="end" onClick={() => setShowNewPassword(!showNewPassword)}>
                  <Iconify icon={showNewPassword ? 'ph:eye-slash-light' : 'ic:outline-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          disabled={isDisable}
          name="confirm_password"
          label="Confirm password"
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={isDisable}
                  edge="end"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Iconify icon={showConfirmPassword ? 'ph:eye-slash-light' : 'ic:outline-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Box mt={5} />

      <LoadingButton
        {...(!isDisable && {
          type: 'submit',
        })}
        disabled={isDisable}
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
