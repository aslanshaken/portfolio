import PropTypes from 'prop-types';
import { Avatar, Box, Card, colors, Stack, Typography } from '@mui/material';
import { IconButtonAnimate } from './animate';
import GradientText from './GradientText';
import Image from './Image';
import Iconify from './Iconify';

// ----------------------------------------------------------------------

FoodCartCard.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
  price: PropTypes.number,
  we_kc: PropTypes.string,
  onClick: PropTypes.func,
  onClickPlus: PropTypes.func,
  chefname: PropTypes.string,
  chefavatar: PropTypes.string,
};

export default function FoodCartCard(props) {
  const {
    chefname,
    chefavatar,
    name,
    cover,
    price,
    we_kc,
    onClick = () => {},
    onClickPlus = () => {},
    ...other
  } = props;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 1,
        boxShadow: 0,
      }}
      square
      {...other}
    >
      {chefname && <Stack p={2} direction={'row'} alignItems={'center'} spacing={2} position={'relative'} zIndex={10}>
        <Avatar src={`/assets/search-chef/chefs/${chefavatar}.png`} sx={{ height: 56, width: 56 }} />
        <Typography color={'text.secondary'}>{chefname}</Typography>
      </Stack>}
      <Box
        sx={{
          pt: !chefname && '1rem',
          width: 200,
          height: 200,
          margin: 'auto',
          cursor: 'pointer',
        }}
        onClick={onClick}
      >
        <Image alt={name} src={cover} sx={{ borderRadius: '50%' }} width={'200px'} height={'200px'} />
      </Box>

      <Stack
        direction="row"
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ paddingTop: '2rem', paddingBottom: '1rem', paddingRight: '1rem', paddingLeft: '1rem' }}
      >
        <Box>
          <Typography variant="subtitle1" color={'text.primary'}>
            {name}
          </Typography>
          <GradientText color="primary" variant="subtitle1">
            ${price}
          </GradientText>
          <Typography variant="h6" color={'text.primary'} />
          <Typography variant="body1" color={colors.grey[400]} letterSpacing={1.5}>
            {we_kc}
          </Typography>
        </Box>
        <Box>
          <IconButtonAnimate sx={{ p: 0, width: 33, height: 33 }} onClick={onClickPlus}>
            <Iconify icon={'ic:outline-plus'} sx={{ width: 33, height: 33, color: 'text.secondary' }} />
          </IconButtonAnimate>
        </Box>
      </Stack>
    </Card>
  );
}
