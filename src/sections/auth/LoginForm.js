import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import { IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
import GradientText from '../../components/GradientText';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import { LoadingButton } from '@mui/lab';
import { RHFCheckbox } from '../../components/hook-form/RHFCheckbox';
import useAuth from '../../hooks/useAuth';
import { PATH_AUTH } from '../../routes/paths';


// --------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();


  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
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
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
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
        <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <RHFCheckbox name="Accept" label="Remember me" />
          <NextLink href={PATH_AUTH.forgot} passHref>
            <Link>
              <Typography className="terms">Forgot password?</Typography>
            </Link>
          </NextLink>
        </Stack>
        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Continue
        </LoadingButton>
        <LoadingButton fullWidth size="medium" type="submit" variant="outlined" sx={{ gap: '5px !important' }}>
          <Iconify icon={'logos:google-icon'} sx={{ width: 20, height: 20 }} />
          <GradientText color={'secondary'}>Sign in with Google</GradientText>
        </LoadingButton>
        <Stack direction={'row'} spacing={1} justifyContent={'center'}>
          <GradientText color={'secondary'}>Don’t have the account?</GradientText>
          <NextLink href={PATH_AUTH.register} passHref>
            <Link>
              <Typography className="sign-up">Sign up!</Typography>
            </Link>
          </NextLink>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
