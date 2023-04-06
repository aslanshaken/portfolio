import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, Dialog, Divider, Grid, Stack, styled, TextField, Typography } from '@mui/material';
import GradientText from '../../../components/GradientText';
import Image from '../../../components/Image';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';

//
CartDialog.propTypes = {
  data: PropTypes.object,
  setSelectedItemData: PropTypes.func,
  onSubmit: PropTypes.func,
};
CartDialog.defaultProps = {
  data: {},
};

export default function CartDialog({ data, setSelectedItemData, onSubmit, ...other }) {
  const [orderCount, setOrderCount] = useState(1);
  const [note, setNote] = useState();

  useEffect(() => {
    setNote(data?.how_to_prepare);
  }, [other.open]);

  useEffect(() => {
    const arrDatas = [...Array(orderCount).keys()].map(() => ({ ...data, how_to_prepare: note }));
    setSelectedItemData(arrDatas);
  }, [orderCount, note, other.open]);

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <Stack>
        <Image src={data?.image_url} alt="Cuisine Splash" sx={{ width: 1, height: 400 }} />
        <Stack py={3} px={5}>
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <Stack>
                <Typography variant="subtitle1" gutterBottom>
                  {data?.title}
                </Typography>
                <GradientText variant="subtitle1" gutterBottom>
                  {data?.price}
                </GradientText>
                <Typography variant="body2" color={'secondary'}>
                  {data?.title}
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
            <Typography variant="caption">{data?.description}</Typography>
          </Stack>
          <Stack mt={5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Ingredients'}
            </Typography>
            <Typography variant="caption">{data?.ingredients}</Typography>
          </Stack>

          <Box mt={2.5}>
            <Divider />
          </Box>

          <Stack mt={2.5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Allergy warning'}
            </Typography>
            <Typography variant="caption">{data?.allergy}</Typography>
          </Stack>

          <Box mt={2.5}>
            <Divider />
          </Box>

          <Stack mt={2.5}>
            <Typography variant="subtitle1" gutterBottom>
              {'Notes'}
            </Typography>
            <TextField
              onChange={(e) => setNote(e.target.value)}
              size="small"
              sx={{ textarea: { fontSize: '0.75rem' } }}
              multiline
              rows={4}
              defaultValue={data?.how_to_prepare}
            />
          </Stack>

          <Box mt={8} />

          <LoadingButton
            variant="contained"
            color="secondary"
            onClick={() => {
              onSubmit();
            }}
          >
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

    if (newValue < 2) newValue = 1;

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
