import { Box, Card, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Image from 'src/components/Image';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';

export default function ConfirmCartItem() {
  const { orderConfirmInfo } = useSelector(FOOD_SELECTOR);

  const cart = orderConfirmInfo?.items;

  return (
    <Card>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CardHeader
          icon={<ShoppingCartSmallIcon sx={{ width: 12, height: 12, margin: 'auto', marginBottom: 1.4 }} />}
          title={'Items in your cart'}
        />
      </Box>
      {cart?.map((item) => (
        <Stack key={item?.id}>
          <Box px={3} py={3}>
            <List disablePadding sx={{ overflowX: 'auto' }}>
              <ListItem disableGutters>
                <Stack direction={'row'} alignItems={'center'} spacing={{ xs: 2, md: 6 }} width={1} px={{ md: 4 }}>
                  <Image
                    alt={'Cuisine Image'}
                    src={item?.image_url}
                    sx={{ borderRadius: '50%', width: { md: 150, xs: 100 }, height: { md: 150, xs: 100 } }}
                  />

                  <Stack>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item?.quantity}
                    </Typography>
                  </Stack>

                  <Box sx={{ flexGrow: 1 }} />

                  <Typography fontWeight={'bold'} color={'secondary'}>
                    ${item?.price}
                  </Typography>
                </Stack>
              </ListItem>
            </List>
          </Box>

          <Divider />
        </Stack>
      ))}
    </Card>
  );
}
