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

  '.food-image-wrapper:hover .food-backdrop': {
    top: 0,
    height: '100%',
    opacity: 1,
  },

  '.food-image-wrapper:hover .food-view-button': {
    display: 'block',
  },

  '.food-view-button': {
    display: 'none',
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
    selectedCategory,
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
        <CardContent>
          {chefname && (
            <Stack p={2} direction={'row'} alignItems={'center'} spacing={2} position={'relative'} zIndex={10}>
              <Avatar src={`/assets/search-chef/chefs/${chefavatar}.png`} sx={{ height: 56, width: 56 }} />
              <Typography color={'text.secondary'}>{chefname}</Typography>
            </Stack>
          )}
          <Box
            className="food-image-wrapper"
            sx={{
              mt: !chefname && '1rem',
              margin: 'auto',
              width: '160px',
              height: '160px',
              position: 'relative',
              clipPath: 'circle(80px at center)',
            }}
          >
            <Image alt={name} src={cover} sx={{ position: 'absolute', width: '100%', height: '100%', top: 0 }} />
            <Stack className="food-backdrop" alignItems={'center'} justifyContent={'center'}>
              <Button onClick={onClick} variant="outlined" className="food-view-button">
                View food
              </Button>
            </Stack>
          </Box>

          <Stack
            direction="row"
            gap={1}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ paddingTop: '2rem', paddingBottom: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                color={'text.primary'}
                fontWeight={400}
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
              <Typography color="text.primary" variant="subtitle1" fontWeight={600}>
                {`$${price} / ${quantity} ${measurement || ''}`}
              </Typography>
              {min_order > 1 && (
                <Typography variant="caption" color="text.secondary">
                  min orders {`${min_order} ${measurement || ''}`}
                </Typography>
              )}
            </Box>
            <Box>
              {/* <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }} onClick={onClickPlus}>
              <Iconify icon={'ic:outline-plus'} sx={{ width: 33, height: 33, color: 'text.secondary' }} />
            </IconButtonAnimate> */}
              <CountBox
                selectedCategory={selectedCategory}
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
