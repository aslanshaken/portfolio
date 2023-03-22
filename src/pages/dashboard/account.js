// layouts
import Layout from '../../layouts';
// components
import { Divider, Stack } from '@mui/material';
import Page from '../../components/Page';
import Profile from '../../sections/@dashboard/account/Profile';
import AccountInformationForm from '../../sections/@dashboard/account/AccountInformationForm';
import AccountPasswordForm from 'src/sections/@dashboard/account/AccountPasswordForm';
// sections

// ----------------------------------------------------------------------

AccountPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function AccountPage() {
  return (
    <Page title="Personal Account : Dashboard">
      <Stack maxWidth={600} mx={{ xs: 'auto', md: 5 }}>
        <Profile />
        <AccountInformationForm />

        <Divider sx={{ mt: 3 }} />

        <AccountPasswordForm />
      </Stack>
    </Page>
  );
}
