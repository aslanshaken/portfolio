import { Typography, styled } from '@mui/material';

const GradientText = styled(Typography)(({ theme, color = 'primary' }) => {
  return {
  background: theme.palette.gradients[color],
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}
});

export default GradientText;
