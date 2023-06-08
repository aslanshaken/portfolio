import * as Yup from 'yup';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
import useNotify from 'src/hooks/useNotify';
import Iconify from 'src/components/Iconify';
import { useDispatch } from 'src/redux/store';
import { contactUs } from 'src/redux/slices/contact-us';

export default function ContactUsForm() {
  const { successAlert, errorAlert } = useNotify();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    full_name: Yup.string().required('Full name is required'),
    email: Yup.string().email().required('Email address is required'),
    message: Yup.string().required('Message is required'),
  });

  const defaultValues = {
    full_name: '',
    email: '',
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      dispatch(contactUs(data));
      // successAlert();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:+19299285292';
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        py={6}
        px={{ xs: 2, sm: 6, md: 2, lg: 6 }}
        sx={{
          borderRadius: 1,
          padding: 5,
        }}
      >
        <Typography variant="h4" fontWeight={500}>
          Unlock the earning potential of your kitchen with our support
        </Typography>

        <RHFTextField
          sx={{ background: 'white' }}
          type={'text'}
          name={'full_name'}
          label={'Full name'}
          variant="filled"
          size="small"
        />

        <RHFTextField
          sx={{ background: 'white' }}
          type={'text'}
          name={'email'}
          label={'Email address'}
          variant="filled"
          size="small"
        />

        <RHFTextField
          multiline
          rows={8}
          sx={{ background: 'white' }}
          type={'text'}
          name={'message'}
          label={'Your message'}
          variant="filled"
          size="small"
        />

        <Stack direction={'row'} justifyContent={'space-between'}>
          <Button
            type="submit"
            size="large"
            variant="contained"
            color="primary"
            sx={{ padding: '20px 40px', width: 'fit-content', borderRadius: 50 }}
          >
            Get started
          </Button>
          <IconButton
            sx={(theme) => ({ background: theme.palette.gradients.primary })}
            onClick={handleCall}
            size="large"
            variant="contained"
          >
            <Iconify color={'white'} icon={'material-symbols:phone-enabled'} />
          </IconButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
