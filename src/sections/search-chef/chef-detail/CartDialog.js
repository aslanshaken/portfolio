import PropTypes from 'prop-types';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Dialog, Divider, Grid, Stack, styled, TextField, Typography } from '@mui/material';
import GradientText from '../../../components/GradientText';
import Image from '../../../components/Image';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';
import { useDispatch } from '../../../redux/store';
import { addFoodCart } from '../../../redux/slices/food';

//
CartDialog.propTypes = {
  data: PropTypes.object,
};
CartDialog.defaultProps = {
  data: {},
};

export default function CartDialog({ data, ...other }) {
  const [orderCount, setOrderCount] = useState(1);

  const dispatch = useDispatch();

  const handleClickAddCart = () => {
    const arrDatas = [...Array(orderCount).keys()].map(() => data);
    dispatch(addFoodCart(arrDatas));
    other.onClose();
  };

  return (
    <Dialog maxWidth={'sm'} {...other}>
      <Stack>
        <Image
          src={'/assets/search-chef/chefs/splash-cuisine.png'}
          alt="Cuisine Splash"
          sx={{ width: 1, height: 400 }}
        />
        <Stack py={3} px={5}>
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <Stack>
                <Typography variant="subtitle1" gutterBottom>
                  {data.title}
                </Typography>
                <GradientText variant="subtitle1" gutterBottom>
                  {data.price}
                </GradientText>
                <Typography variant="body2" color={'secondary'}>
                  {data.title}
                </Typography>
              </Stack>
            </Grid>
            <Grid>
              <CartCountBox value={orderCount} onChange={(val) => setOrderCount(val)} />
            </Grid>
          </Grid>
          <Stack mt={5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Description'}
            </Typography>
            <Typography variant="caption">{data.description}</Typography>
          </Stack>
          <Stack mt={5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Ingredients'}
            </Typography>
            <Typography variant="caption">{data.indigents}</Typography>
          </Stack>

          <Box mt={2.5}>
            <Divider />
          </Box>

          <Stack mt={2.5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Allergy warning'}
            </Typography>
            <Typography variant="caption">{data.allergies}</Typography>
          </Stack>

          <Box mt={2.5}>
            <Divider />
          </Box>

          <Stack mt={2.5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Notes'}
            </Typography>
            <TextField
              size="small"
              sx={{ textarea: { fontSize: '0.75rem' } }}
              multiline
              rows={4}
              defaultValue={data.note}
            />
          </Stack>

          <Box mt={8} />

          <LoadingButton variant="contained" color="secondary" onClick={handleClickAddCart}>
            {'Add to cart'}
          </LoadingButton>
        </Stack>
      </Stack>
    </Dialog>
  );
}

//

const CartCountStyle = styled(Stack)(({ theme }) => ({
  '& *': {
    color: theme.palette.secondary.main,
  },
  border: `solid 1px`,
  borderColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius * 2,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  alignItems: 'center',
  cursor: 'pointer',
}));

CartCountBox.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
};

function CartCountBox({ value = 0, onChange }) {
  const handleChange = (type) => {
    let newValue = value;
    if (type === '+') newValue++;
    else newValue--;

    if (newValue < 0) newValue = 0;

    onChange(newValue);
  };

  return (
    <CartCountStyle direction={'row'} spacing={2}>
      <IconButtonAnimate onClick={() => handleChange('-')} disabled={value === 0 ? true : false}>
        <Iconify icon={'ic:round-minus'} />
      </IconButtonAnimate>
      <Typography variant="h6" sx={{ minWidth: 30, textAlign: 'center' }}>
        {value}
      </Typography>
      <IconButtonAnimate onClick={() => handleChange('+')}>
        <Iconify icon={'ic:round-plus'} />
      </IconButtonAnimate>
    </CartCountStyle>
  );
}
