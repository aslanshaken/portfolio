import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Stack, Typography, Button } from '@mui/material';
import Image from './Image';
import CountBox from './countBox';
import styled from '@emotion/styled';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

DateFoodCartCard.propTypes = {
  data: PropTypes.object,
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  we_kc: PropTypes.string,
  onClick: PropTypes.func,
  onClickPlus: PropTypes.func,
  chefname: PropTypes.string,
  chefavatar: PropTypes.string,
  measurement: PropTypes.string,
  quantity: PropTypes.number,
  min_order: PropTypes.number,
};

const FoodCard = styled('div')(() => ({
  '.food-backdrop': {
    position: 'absolute',
    top: '100%',
    width: '100%',
    height: '0',
    background: 'rgba(0,0,0,0.5)',
    opacity: 0,
    transition: '.3s ease',
  },
}));

export default function DateFoodCartCard(props) {
  const { user } = useAuth();

  const {
    data,
    chefname,
    chefavatar,
    name,
    cover,
    quantity = 1,
    price,
    measurement,
    selectedDate,
    selectedTime,
    handleRemoveItem = () => {},
    min_order,
    ...other
  } = props;

  return (
    <FoodCard>
      <Card
        elevation={0}
        sx={{
          borderRadius: 1,
          height: 1,
        }}
        square
        {...other}
      >
        {chefname && (
          <Stack p={2} direction={'row'} alignItems={'center'} spacing={2} position={'relative'} zIndex={10}>
            <Avatar src={`/assets/search-chef/chefs/${chefavatar}.png`} sx={{ height: 56, width: 56 }} />
            <Typography color={'text.secondary'}>{chefname}</Typography>
          </Stack>
        )}
        <Image
          alt={name}
          src={cover}
          sx={{ width: '100%', height: 150, top: 0 }}
        />
        <Stack py={2} px={1} direction="row" gap={1} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <Typography
              variant="h7"
              color={'text.primary'}
              fontWeight="600"
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {name}
            </Typography>
            <Typography color={'gray'} fontWeight={400}>
              {`$${price} / ${quantity} ${measurement || ''}`}
            </Typography>
            <Box sx={{ height: 10 }}>
              <Typography variant="caption" color="text.secondary">
                {min_order > 1 && `min order ${`${min_order} ${measurement || ''}`}s`}
              </Typography>
            </Box>
          </Box>
          <Button onClick={handleRemoveItem}>Remove</Button>
        </Stack>
      </Card>
    </FoodCard>
  );
}
