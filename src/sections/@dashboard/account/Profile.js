import { Badge, Stack, styled, Typography } from '@mui/material';
import useAuth from 'src/hooks/useAuth';
import Avatar from '../../../components/Avatar';

//

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    width: 15,
    height: 15,
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    top: 'auto',
    '&::after': {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

//
export default function Profile() {
  const { user } = useAuth();

  return (
    <Stack direction={'row'} alignItems={'center'} spacing={3}>
      <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
        <Avatar alt={'Cheff profile avatar'} src={'/assets/dashboard/account/avatar1.png'} sx={{ width: 130, height: 130 }} />
      </StyledBadge>

      <Stack>
        <Typography variant='h3' gutterBottom>{'Hello Michael!'}</Typography>
        <Typography variant='body1' fontStyle={'italic'} color="text.secondary">{'@Michel23drift'}</Typography>
      </Stack>
    </Stack>
  );
}
