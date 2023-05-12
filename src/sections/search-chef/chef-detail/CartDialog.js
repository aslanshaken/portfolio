import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Image from '../../../components/Image';
import { IconButtonAnimate } from '../../../components/animate';
import Iconify from '../../../components/Iconify';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';
import { PATH_AUTH } from 'src/routes/paths';
import useNotify from 'src/hooks/useNotify';
import { useSelector } from 'src/redux/store';
import { FOOD_SELECTOR } from 'src/redux/slices/food';

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
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [orderCount, setOrderCount] = useState();
  const [note, setNote] = useState();
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;

  useEffect(() => {
    if (other.open) {
      setNote(cart?.find((item) => item?.id === data?.id)?.notes ?? '');
      setOrderCount(cart?.find((item) => item?.id === data?.id)?.notes ? 1 : data?.min_order);
    }
  }, [other.open]);

  return (
    <Dialog maxWidth={'sm'} fullWidth {...other}>
      <DialogContent sx={{ padding: 0 }}>
        <IconButton
          onClick={other.onClose}
          width={'fit-content'}
          sx={{ background: 'white', position: 'absolute', right: 10, top: 10, color: 'black', zIndex: 10 }}
        >
          <Iconify icon={'iconoir:cancel'} />
        </IconButton>
        <Stack>
          <Image src={data?.image_url} alt="Cuisine Splash" sx={{ width: 1, height: 400 }} />
          <Stack py={3} px={5}>
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={12}>
                <Stack>
                  <Typography variant="subtitle1" gutterBottom fontWeight={400} fontSize="1.4rem" width={300}>
                    {data?.title}
                  </Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} width={1}>
                  <Stack>
                    <Typography variant="subtitle1" gutterBottom fontWeight={600} fontSize="1.2rem">
                      {`$${data?.current_price} /${data?.quantity} ${data?.measurement || ''}`}
                    </Typography>
                    {data?.min_order > 1 && (
                      <Typography color="text.secondary">
                        min orders {`${data?.min_order} ${data?.measurement || ''}`}
                      </Typography>
                    )}
                  </Stack>
                  <CartCountBox
                    foodId={data?.id}
                    value={orderCount}
                    minOrder={data?.min_order}
                    onChange={(val) => setOrderCount(val)}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Stack mt={2}>
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
              <Typography variant="caption">
                Please be aware that the ingredients mentioned are the primary ones, and the food could contain
                allergens such as milk, peanuts, tree nuts, wheat, dairy, eggs, fish, shellfish, soy, or sesame.
              </Typography>
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
                defaultValue={note}
              />
            </Stack>

            <Box mt={8} />

            <LoadingButton
              variant="contained"
              color="secondary"
              onClick={() => {
                if (isAuthenticated) {
                  data.notes = note;
                  data.count = orderCount;
                  setSelectedItemData(data);
                  onSubmit();
                } else {
                  router.push(PATH_AUTH.login);
                }
              }}
            >
              {'Add to cart'}
            </LoadingButton>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

//

const CartCountStyle = styled(Stack)(({ theme }) => ({
  '& *': {
    color: theme.palette.primary.main,
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
  minOrder: PropTypes.any,
  onChange: PropTypes.func,
  foodId: PropTypes.number,
};

function CartCountBox({ value = 0, minOrder = 1, onChange, foodId }) {
  const { checkout } = useSelector(FOOD_SELECTOR);
  const { cart } = checkout;
  const { errorAlert } = useNotify();
  let newValue = value;

  const handleChange = (type) => {
    if (type === '+') newValue++;
    else newValue--;

    // if (newValue < minOrder) {
    //   newValue = minOrder;
    //   errorAlert(`This dish can only be ordered in a minimum quantity of ${value}`);
    // }

    onChange(newValue);
  };

  return (
    <CartCountStyle direction={'row'} sx={{ padding: '1px', height: 'fit-content' }}>
      <IconButtonAnimate
        onClick={() => handleChange('-')}
        disabled={value <= (cart?.find((item) => item?.id === foodId) ? 1 : minOrder) ? true : false}
        sx={{
          py: 0.5,
          opacity: value <= (cart?.find((item) => item?.id === foodId) ? 1 : minOrder) ? 0.7 : 1,
        }}
      >
        <Iconify icon={'ic:round-minus'} />
      </IconButtonAnimate>

      <Typography
        color={'text.primary'}
        variant="h6"
        sx={(theme) => ({
          px: 2,
          textAlign: 'center',
          height: '100%',
        })}
      >
        {value}
      </Typography>
      <IconButtonAnimate
        onClick={() => handleChange('+')}
        sx={{
          py: 0.5,
        }}
      >
        <Iconify icon={'ic:round-plus'} />
      </IconButtonAnimate>
    </CartCountStyle>
  );
}
