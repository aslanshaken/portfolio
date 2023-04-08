import { Box, Card, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Image from 'src/components/Image';
import { FOOD_SELECTOR } from 'src/redux/slices/food';
import { useSelector } from 'src/redux/store';

export default function ConfirmCartItem() {
  const { checkout } = useSelector(FOOD_SELECTOR);

  const { cart } = checkout;

  const outputArray = cart?.reduce((acc, curr) => {
    // Find the object in acc array with same id and name
    const foundObj = acc.find((obj) => obj.id === curr.id);

    // If object is present increment the count else add the current object into accumulator array
    if (foundObj) {
      foundObj.count++;
    } else {
      acc.push({ ...curr, count: 1 });
    }

    return acc;
  }, []);

  return (
    <Card>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CardHeader
          icon={<ShoppingCartSmallIcon sx={{ width: 12, height: 12, margin: 'auto', marginBottom: 1.4 }} />}
          title={'Items in your cart'}
        />
      </Box>
      {outputArray?.map((item) => (
        <Stack key={item?.id}>
          <Box px={3} py={3}>
            <List disablePadding sx={{ overflowX: 'auto' }}>
              <ListItem disableGutters>
                <Stack direction={'row'} alignItems={'center'} spacing={2} width={1}>
                  <Image
                    alt={'Cuisine Image'}
                    src={item?.image_url}
                    sx={{ borderRadius: '50%', width: { md: 150, xs: 100 }, height: { md: 150, xs: 100 } }}
                  />

                  <Stack>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {item?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {item?.count}
                    </Typography>
                  </Stack>

                  <Box sx={{ flexGrow: 1 }} />

                  <Typography fontWeight={'bold'} color={'secondary'}>
                    ${item?.current_price*item?.count}
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
