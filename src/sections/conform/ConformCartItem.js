import { Box, Card, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { ShoppingCartSmallIcon } from 'src/assets';
import CardHeader from 'src/components/card/CardHeader';
import Image from 'src/components/Image';

export default function ConformCartItem() {
  return (
    <Card>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CardHeader
          icon={<ShoppingCartSmallIcon sx={{ width: 12, height: 12, margin: 'auto', marginBottom: 1.4 }} />}
          title={'Items in your cart'}
        />
      </Box>

      <Box px={3} py={3}>
        <List disablePadding sx={{ overflowX: 'auto' }}>
          <ListItem disableGutters>
            <Stack direction={'row'} alignItems={'center'} spacing={2} width={1}>
              <Image
                alt={'Cuisine Image'}
                src={'/assets/search-chef/foods/chilli_pepper.png'}
                sx={{ borderRadius: '50%', maxWidth: { md: 150, xs: 100 }, maxHeight: { md: 150, xs: 100 } }}
              />

              <Stack>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Chili pepper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: 1
                </Typography>
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Typography fontWeight={'bold'} color={'secondary'}>
                $115
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Box px={3} py={3}>
        <List disablePadding sx={{ overflowX: 'auto' }}>
          <ListItem disableGutters>
            <Stack direction={'row'} alignItems={'center'} spacing={2} width={1}>
              <Image
                alt={'Cuisine Image'}
                src={'/assets/search-chef/foods/chilli_pepper.png'}
                sx={{ borderRadius: '50%', minWidth: { md: 150, xs: 100 }, height: { md: 150, xs: 100 } }}
              />

              <Stack>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Chili pepper
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: 1
                </Typography>
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Typography fontWeight={'bold'} color={'secondary'}>
                $115
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </Box>
    </Card>
  );
}
