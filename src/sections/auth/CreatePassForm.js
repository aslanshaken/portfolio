import * as Yup from 'yup';
// next
import { IconButton, InputAdornment, Stack } from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import axios from 'src/utils/axios';
import useNotify from 'src/hooks/useNotify';

// --------------------------------------------------------

export default function CreatePassForm() {
  const { successAlert, errorAlert } = useNotify();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`/api/${process.env.API_VERSION}/reset_password`, {
        token: '6660cd9f1a39e88fe3a4',
        password: data.password,
      });
      successAlert();
    } catch (error) {
      errorAlert(error.message);
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'ph:eye-slash-light' : 'ic:outline-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <RHFTextField
          name="confirmPassword"
          label="Confirm password"
          type={showCPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowCPassword(!showCPassword)}>
                  <Iconify icon={showCPassword ? 'ph:eye-slash-light' : 'ic:outline-remove-red-eye'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Reset password
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
