import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import {Stack } from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';

// --------------------------------------------------------

export default function ForgotPassForm() {
  const RegisterSchema = Yup.object().shape({
    email_phone: Yup.string().email('Email must be a valid email address').required('Email is required'),
  });

  const defaultValues = {
    email_phone: '',
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
      await ForgotPassword(data.email_phone);
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email_phone" label="Phone number / Email address" />

        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
