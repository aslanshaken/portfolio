import * as Yup from 'yup';
// next
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Iconify from '../../components/Iconify';
import { LoadingButton } from '@mui/lab';
import useAuth from '../../hooks/useAuth';

// --------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();

  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    phoneNumber: Yup.string().required('Phone number required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    password_confirmation: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    password_confirmation: '',
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
      await register(data);
      setSuccessMsg('Please confirm your email.');
    } catch (error) {
      setErrorMsg(error.message);
      // reset();
    }
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
        {successMsg && (
          <Alert
            severity="success"
            onClose={() => {
              setSuccessMsg();
            }}
          >
            {successMsg}
          </Alert>
        )}
        <RHFTextField name="firstName" label="First name" />
        <RHFTextField name="lastName" label="Last name" />
        <RHFTextField name="phoneNumber" label="Phone number" />
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
          name="password_confirmation"
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
          {/* <RHFCheckbox name="Accept" label="Accept " />
          <NextLink href={'/terms'} passHref>
            <Link>
              <Typography className="terms">terms and conditions</Typography>
            </Link>
          </NextLink> */}
        </Stack>
        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Continue
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
