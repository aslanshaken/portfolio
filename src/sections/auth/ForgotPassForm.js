import * as Yup from 'yup';
// next
import { Stack, Typography } from '@mui/material';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextField } from '../../components/hook-form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import useNotify from 'src/hooks/useNotify';
import axios from 'src/utils/axios';

// --------------------------------------------------------

export default function ForgotPassForm({ setIsSuccess }) {
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
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      setIsSuccess(true);
      const response = await axios.post(`/api/${process.env.API_VERSION}/forgot_password`, {
        email: data.email_phone,
      });
      // await ForgotPassword(data.email_phone);
    } catch (error) {
      reset();
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email_phone" label="Email address" />

        <LoadingButton fullWidth size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Send
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
