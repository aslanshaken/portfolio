import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import { Alert, IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
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
import GoogleLogin from 'react-google-login';

// --------------------------------------------------------

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const [isLoading, setIsLoading] = useState(false);

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
      setErrorMsg(error.message);
      reset();
    }
  };

  // google handlers
  const handleGoogleLoginSucess = (response) => {
    setIsLoading(false);
  };

  const handleGoogleLoginFailed = (error) => {
    setIsLoading(false);
  };

  return (
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
          {/* <RHFCheckbox name="Accept" label="Remember me" /> */}
          <NextLink href={PATH_AUTH.forgot} passHref>
            <Link>
              <Typography color={'secondary'} className="terms" sx={{ textDecorationLine: 'underline' }}>
                Forgot password?
              </Typography>
            </Link>
          </NextLink>
        </Stack>

        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Continue
        </LoadingButton>

        {/* <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          onSuccess={handleGoogleLoginSucess}
          onFailure={handleGoogleLoginFailed}
          onRequest={() => {
            setIsLoading(true);
          }}
          render={(renderProps) => (
            <LoadingButton
              loading={isLoading}
              fullWidth
              size="medium"
              variant="outlined"
              sx={{ gap: '5px !important' }}
              onClick={renderProps.onClick}
            >
              <Iconify icon={'logos:google-icon'} sx={{ width: 20, height: 20, mr: 1 }} />
              <GradientText color={'secondary'}>Sign in with Google</GradientText>
            </LoadingButton>
          )}
        /> */}

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
