import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/Iconify';

//

const TopBottomButtonStyle = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',
  '& .MuiButton-root': {
    padding: 0,
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    minWidth: 0,
    minHeight: 0,
    border: 'none !important',
    color: theme.palette.text.primary,
  },
}));

export default function OrderCard() {
  return (
    <Stack
      sx={{
        borderRadius: 1,
        background: 'url(/assets/textures/cuisine-cart.png)',
        padding: 5,
      }}
    >
      <Typography variant={'h4'} fontWeight={500} gutterBottom>
        {'Your order'}
      </Typography>

      <Box mt={5} />

      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'} color={'text.secondary'}>
          {'Lettuce salad leaves'}
        </Typography>
        <Typography>{'$23.98'}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'} color={'text.secondary'}>
          {'Celebrity tomatoes'}
        </Typography>
        <Typography>{'$23.98'}</Typography>
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'} color={'text.secondary'}>
          {'Chili pepper'}
        </Typography>
        <Typography>{'$23.98'}</Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Subtotal:'}</Typography>
        <Typography variant="subtitle1">{'$23.98'}</Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Shipping:'}</Typography>
        <Typography variant="subtitle1">{'$23.98'}</Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />
      <Stack direction={'row'} justifyContent={'space-between'} mb={2}>
        <Typography variant={'body2'}>{'Total:'}</Typography>
        <Typography variant="subtitle1">{'$23.98'}</Typography>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Tips'}
      </Typography>
      <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <TextField fullWidth label={'Fair enough'} variant={'filled'} size={'small'} />
        <TopBottomButtonStyle orientation={'vertical'} color={'inherit'}>
          <Button>
            <Iconify icon={'material-symbols:keyboard-arrow-up-rounded'} sx={{ height: 24 }} />
          </Button>
          <Button>
            <Iconify icon={'material-symbols:keyboard-arrow-down-rounded'} sx={{ height: 24 }} />
          </Button>
        </TopBottomButtonStyle>
      </Stack>

      <Box mt={5} />

      <Typography variant="subtitle1" gutterBottom>
        {'Enter your promocode here'}
      </Typography>

      <TextField fullWidth label={'coupon'} variant={'filled'} size={'small'} />

      <Box mt={5} />

      <Typography variant={'body2'} color={'text.secondary'}>
        {
          'Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.'
        }
      </Typography>

      <Box mt={5} />

      <FormControlLabel
        control={<Checkbox sx={{ mr: 1 }} />}
        label={'I’ve read and agree to the website terms and conditions'}
        sx={{ alignItems: 'flex-start' }}
      />
    </Stack>
  );
}
