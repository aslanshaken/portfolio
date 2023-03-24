//
import PropTypes from 'prop-types';
// @mui
import { Box, Button, ButtonGroup, Card, colors, List, ListItem, Stack, styled, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Iconify from 'src/components/Iconify';
import Image from 'src/components/Image';

//

const datas = [
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
  {
    name: 'Chili pepper',
  },
];

//
export default function CartListCard() {
  return (
    <Card>
      <CardHeader
        icon={<ShoppingCartSmallIcon sx={{ width: 12, height: 12, margin: 'auto', marginBottom: 1.4 }} />}
        title={'Items in your cart'}
      />

      <Box px={3} py={3}>
        <List disablePadding sx={{ overflowX: 'auto' }}>
          {datas.map((data, _i) => (
            <ListItem key={'cart-cousine-' + _i} disableGutters>
              <CuisineCard />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
}

//
CuisineCard.propTypes = {
  data: PropTypes.object,
};

function CuisineCard({ data = {} }) {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2} width={1}>
      <Image
        alt={'Cuisine Image'}
        src={'/assets/search-chef/foods/chilli_pepper.png'}
        sx={{ borderRadius: '50%', minWidth: 80, height: 80 }}
      />

      <Stack>
        <Typography variant="h6" color="black" fontWeight={600} gutterBottom>
          {'Chili pepper'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'440 cal'}
        </Typography>
      </Stack>

      <Box>
        <CartCountBox />
      </Box>

      <Typography variant={'subtitle1'} color={'success.main'}>{'$23.98'}</Typography>

      <Box>
        <Button color="error" sx={{ borderRadius: 1, p: 1, minWidth: 0, background: colors.grey[100] }}>
          <Iconify icon={'mdi:trash'} />
        </Button>
      </Box>
    </Stack>
  );
}

// ------------------------------------------------------------------------------

const CartCountStyle = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: 'none',
  '& .MuiButton-root': {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    minWidth: 0,
    background: colors.grey[100],
    border: 'none !important',
  },
}));

CartCountBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

function CartCountBox({ value = 0, onChange = () => {} }) {
  const handleChange = (type) => {
    let newValue = value;
    if (type === '+') newValue++;
    else newValue--;

    if (newValue < 0) newValue = 0;

    onChange(newValue);
  };

  return (
    <CartCountStyle color={'inherit'} variant={'contained'}>
      <Button onClick={() => handleChange('-')}>
        <Iconify icon={'ic:round-minus'} />
      </Button>

      <Button disableRipple>
        <Typography variant="body1" color={'text.secondary'} sx={{ minWidth: 30, textAlign: 'center' }}>
          {value}
        </Typography>
      </Button>
      <Button onClick={() => handleChange('+')}>
        <Iconify icon={'ic:round-plus'} />
      </Button>
    </CartCountStyle>
  );
}
