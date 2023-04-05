import { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, RHFTextField } from 'src/components/hook-form';
// @mui
import { Box, Button, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useNotify from 'src/hooks/useNotify';
import axios from 'src/utils/axios';
import useAuth from 'src/hooks/useAuth';

export default function AccountInformationForm() {
  const [isDisablePersonalInfo, setIsDisablePersonalInfo] = useState(true);
  const [isDisableAddress, setIsDisableAddress] = useState(true);
  const { successAlert, errorAlert } = useNotify();

  const { user: userInfo } = useAuth();

  const personalInfoScahema = Yup.object().shape({
    custom_vocabulary: Yup.string(),
    first_name: Yup.string().required('first name is required'),
    last_name: Yup.string().required('last name is required'),
    username: Yup.string().required('Username is required'),
    phone_number: Yup.string().required('Phone number is required'),
    email_address: Yup.string().required('Email address is required'),
    instagram: Yup.string().required('Instagram is required'),
    facebook: Yup.string().required('Facebook is required'),
  });

  const personalInfoDefaultValues = {
    first_name: userInfo?.user?.first_name ?? '',
    last_name: userInfo?.user?.last_name ?? '',
    username: userInfo?.user?.username ?? '',
    phone_number: userInfo?.user?.mobile ?? '',
    email_address: userInfo?.user?.email ?? '',
    instagram: userInfo?.user?.instagram ?? '',
    facebook: userInfo?.user?.facebook ?? '',
  };

  const personalInfoMethods = useForm({
    resolver: yupResolver(personalInfoScahema),
    defaultValues: personalInfoDefaultValues,
  });

  const {
    setValue: setPersonalInfoValue,
    handleSubmit: personalInfoHandleSubmit,
    reset: resetPersonalInfo,
    formState: { isSubmitting: personalInfoIsSubmitting, isDirty: personalInfoIsDirty },
  } = personalInfoMethods;

  const personalInfoOnSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error.message);
      errorAlert(error.message);
    }
  };

  const addressScahema = Yup.object().shape({
    custom_vocabulary: Yup.string(),
    address: Yup.string().required('address is required'),
    apartment: Yup.string().required('apartment is required'),
    state: Yup.string().required('state is required'),
    city: Yup.string().required('city is required'),
    zip: Yup.number().required('ZIP is required'),
  });

  const addressDefaultValues = {
    address: userInfo?.addresses?.[userInfo?.addresses?.length - 1]?.line1 ?? '',
    apartment: userInfo?.addresses?.[userInfo?.addresses?.length - 1]?.apartment ?? '',
    state: userInfo?.addresses?.[userInfo?.addresses?.length - 1]?.state ?? '',
    city: userInfo?.addresses?.[userInfo?.addresses?.length - 1]?.city ?? '',
    zip: userInfo?.addresses?.[userInfo?.addresses?.length - 1]?.zip ?? '',
  };

  const addressMethods = useForm({
    resolver: yupResolver(addressScahema),
    defaultValues: addressDefaultValues,
  });

  const {
    setValue: setAddressValue,
    handleSubmit: addressHandleSubmit,
    reset: resetAddress,
    formState: { isSubmitting: addressIsSubmitting, isDirty: addressIsDirty },
  } = addressMethods;

  const addressOnSubmit = async (data) => {
    try {
      const response = await axios.post(`/api/${process.env.API_VERSION}/users/add_address`, {
        address: {
          line1: data.address,
          apartment: data.apartment,
          state: data.state,
          city: data.city,
          zip: data.zip,
          primary_address: 'true',
        },
      });
      successAlert();
    } catch (error) {
      errorAlert(error.message);
    }
  };

  useEffect(() => {
    resetPersonalInfo({ ...personalInfoDefaultValues });
    resetAddress({ ...addressDefaultValues });
  }, [userInfo]);

  return (
    <>
      <FormProvider methods={personalInfoMethods} onSubmit={personalInfoHandleSubmit(personalInfoOnSubmit)}>
        <Stack spacing={3} mt={5}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'h4'} gutterBottom>
              {'Personal information'}
            </Typography>
            <Button
              sx={{ color: 'black', fontWeight: 'normal' }}
              onClick={() => setIsDisablePersonalInfo(!isDisablePersonalInfo)}
            >
              {isDisablePersonalInfo ? 'edit' : 'disable'}
            </Button>
          </Stack>

          <RHFTextField disabled={isDisablePersonalInfo} name="first_name" label="First name" />
          <RHFTextField disabled={isDisablePersonalInfo} name="last_name" label="Last name" />
          <RHFTextField disabled={isDisablePersonalInfo} name="username" label="Username" />
          <RHFTextField disabled={isDisablePersonalInfo} name="phone_number" label="Phone number" />
          <RHFTextField disabled={isDisablePersonalInfo} name="email_address" label="Email address" type="email" />
          <RHFTextField disabled={isDisablePersonalInfo} name="instagram" label="Instagram" />
          <RHFTextField disabled={isDisablePersonalInfo} name="facebook" label="Facebook" />
        </Stack>

        <Box mt={5} />

        <LoadingButton
          {...(!isDisablePersonalInfo && {
            type: 'submit',
          })}
          disabled={isDisablePersonalInfo}
          variant="outlined"
          loading={personalInfoIsSubmitting}
          // disabled={!personalInfoIsDirty}
          size="large"
          sx={{ color: 'common.black', px: 5 }}
        >
          {'Save'}
        </LoadingButton>
      </FormProvider>

      <FormProvider methods={addressMethods} onSubmit={addressHandleSubmit(addressOnSubmit)}>
        <Stack spacing={3} mt={5}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant={'h4'} gutterBottom>
              {'Address'}
            </Typography>
            <Button
              sx={{ color: 'black', fontWeight: 'normal' }}
              onClick={() => setIsDisableAddress(!isDisableAddress)}
            >
              {isDisableAddress ? 'edit' : 'disable'}
            </Button>
          </Stack>

          <RHFTextField disabled={isDisableAddress} name="address" label="Address" />
          <RHFTextField disabled={isDisableAddress} name="apartment" label="Apartment" />
          <RHFTextField disabled={isDisableAddress} name="state" label="State" />
          <RHFTextField disabled={isDisableAddress} name="city" label="City" />
          <RHFTextField disabled={isDisableAddress} name="zip" label="ZIP" />
        </Stack>

        <Box mt={5} />

        <LoadingButton
          {...(!isDisableAddress && {
            type: 'submit',
          })}
          disabled={isDisableAddress}
          variant="outlined"
          loading={addressIsSubmitting}
          // disabled={!addressIsDirty}
          size="large"
          sx={{ color: 'common.black', px: 5 }}
        >
          {'Save'}
        </LoadingButton>
      </FormProvider>
    </>
  );
}
