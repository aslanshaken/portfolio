import { Typography, styled } from '@mui/material';

const GradientText = styled(Typography)(({ theme }) => ({
  background: theme.palette.gradients.primary,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}));

export default GradientText;
