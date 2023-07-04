import { Container, Dialog, DialogContent, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import Iconify from 'src/components/Iconify';

// ----------------------------------------------------------------------

export default function PolicyDialog({ ...other }) {
  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <DialogContent sx={{ p: 0 }}>
        <IconButton onClick={other.onClose} width={'fit-content'} sx={{ position: 'absolute', right: '0' }}>
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
        <Container sx={{ py: 6 }}>
          <Stack gap={2}>
            <Typography>Privacy Policy</Typography>

            <Typography>Effective Date: 07/04/2023</Typography>

            <Typography>Introduction:</Typography>

            <Typography>
              Hello, everyone! Welcome to Cookk, an innovative food sharing platform connecting talented home chefs and
              restaurants with customers and businesses seeking fresh, homemade meals and more. We are committed to
              protecting your privacy and ensuring the security of your personal information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your information when you use our website. By
              accessing or using Cookk, you agree to the terms and conditions of this policy.
            </Typography>

            <Typography>Information We Collect:</Typography>

            <Typography>Personal Information:</Typography>

            <Typography>
              When you create an account on our website, we collect your name, email address, and contact information.
              If you choose to provide it, we may also collect additional personal information, such as your address and
              payment details, to facilitate transactions.
            </Typography>
            <Typography>Non-Personal Information:</Typography>

            <Typography>
              We may collect non-personal information, such as your IP address, browser type, device information, and
              usage patterns, to improve our website's performance and enhance your experience.
            </Typography>
            <Typography>How We Use Your Information:</Typography>

            <Typography>Personal Information:</Typography>

            <Typography>
              We use your personal information to create and manage your Cookk account, process transactions, and
              provide customer support. With your consent, we may use your email address to send you updates,
              promotional offers, and marketing materials related to Cookk. You can opt-out of receiving these
              communications at any time.
            </Typography>
            <Typography>Non-Personal Information:</Typography>

            <Typography>
              We may use non-personal information for analytical purposes, to monitor and analyze trends, usage
              patterns, and demographics, which helps us improve our services and enhance user experience.
            </Typography>
            <Typography>Information Sharing and Disclosure:</Typography>

            <Typography>Service Providers:</Typography>

            <Typography>
              We may share your personal information with trusted third-party service providers who assist us in
              operating our website, processing payments, and delivering services. These service providers are
              contractually obligated to handle your information securely and only for authorized purposes.
            </Typography>
            <Typography>Legal Compliance:</Typography>

            <Typography>
              We may disclose your information if required by law, such as in response to a court order, government
              request, or to protect our rights, property, or safety, or the rights, property, or safety of others.
            </Typography>
            <Typography>Data Security:</Typography>

            <Typography>
              We implement appropriate technical and organizational measures to protect your personal information from
              unauthorized access, use, alteration, or disclosure. However, please note that no data transmission over
              the internet or electronic storage system is 100% secure.
            </Typography>

            <Typography>Your Choices:</Typography>

            <Typography>Account Information:</Typography>

            <Typography>
              You can review and update your account information by logging into your Cookk account settings.
            </Typography>
            <Typography>Communication Preferences:</Typography>

            <Typography>
              You have the option to unsubscribe from marketing communications by following the instructions provided in
              the emails we send. However, we may still send you transactional or service-related communications.
            </Typography>
            <Typography>Cookies and Tracking Technologies:</Typography>

            <Typography>
              Most web browsers are set to accept cookies by default. You can adjust your browser settings to refuse
              cookies or alert you when cookies are being sent. However, certain features of Cookk may not function
              properly without cookies.
            </Typography>
            <Typography>Updates to this Privacy Policy:</Typography>

            <Typography>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              obligations. We encourage you to review this policy periodically for any updates. The revised Privacy
              Policy will be effective immediately upon posting.
            </Typography>

            <Typography>Contact Us:</Typography>

            <Typography>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at info@cookk.co
            </Typography>

            <Typography>
              By using Cookk, you acknowledge that you have read and understood this Privacy Policy and consent to the
              collection, use, and disclosure of your information as described herein.
            </Typography>
          </Stack>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
