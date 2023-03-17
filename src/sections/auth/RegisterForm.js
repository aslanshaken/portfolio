import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import { IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import { LoadingButton } from '@mui/lab';
import { RHFCheckbox } from '../../components/hook-form/RHFCheckbox';
import useAuth from 'src/hooks/useAuth';

// --------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await register(data.firstName, data.lastName, data.email, data.password, data.confirmpassword);
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="firstName" label="First name" />
        <RHFTextField name="lastName" label="Last name" />
        <RHFTextField name="email" label="Email address" />

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
        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
          <RHFCheckbox name="Accept" label="Accept " />
          <NextLink href={'/terms'} passHref>
            <Link>
              <Typography className="terms">terms and conditions</Typography>
            </Link>
          </NextLink>
        </Stack>
        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Continue
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
