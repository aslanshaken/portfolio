import PropTypes from 'prop-types';
import { Avatar, Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from './animate';
import GradientText from './GradientText';
import Image from './Image';
import Iconify from './Iconify';
import CountBox from './countBox';
import styled from '@emotion/styled';

// ----------------------------------------------------------------------

FoodCartCard.propTypes = {
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

export default function FoodCartCard(props) {
  const {
    data,
    chefname,
    chefavatar,
    name,
    cover,
    quantity = 1,
    price,
    measurement,
    onClick = () => {},
    onClickPlus = () => {},
    selectedDate,
    selectedTime,
    setIsOpenNewCartDlg = () => {},
    setSelectedItemData = () => {},
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
          onClick={onClick}
          alt={name}
          src={cover}
          sx={{ width: '100%', cursor:'pointer', height: 300, top: 0 }}
        />
        <CardContent>
          <Stack
            direction="row"
            gap={1}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ paddingTop: '2rem', paddingBottom: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}
          >
            <Box>
              <Typography
                variant="h6"
                color={'text.primary'}
                fontWeight="bold"
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
              <Typography
                sx={{
                  background: `linear-gradient(to right, #56420D, #CFAA4C)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                variant="h7"
                fontWeight={600}
              >
                {`$${price} / ${quantity} ${measurement || ''}`}
              </Typography>
              <Box sx={{ height: 10 }}>
                <Typography variant="caption" color="text.secondary">
                  {min_order > 1 && `min orders ${`${min_order} ${measurement || ''}`}`}
                </Typography>
              </Box>
            </Box>
            <Box>
              {/* <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }} onClick={onClickPlus}>
              <Iconify icon={'ic:outline-plus'} sx={{ width: 33, height: 33, color: 'text.secondary' }} />
            </IconButtonAnimate> */}
              <CountBox
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setIsOpenNewCartDlg={setIsOpenNewCartDlg}
                setSelectedItemData={setSelectedItemData}
                data={data}
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </FoodCard>
  );
}
