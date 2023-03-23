import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// @mui
import { Autocomplete, Grid, TextField, Card, Box, Stack, Typography, colors } from '@mui/material';
// components
import Container from '../../../components/Container';
import Pagination from '../../../components/Pagination';
import Image from '../../../components/Image';
import GradientText from '../../../components/GradientText';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
// sections
import MenuSearchForm from './MenuSearchForm';
import MenuCategoryForm from './MenuCategoryForm';
import MenuAllerogyForm from './MenuAllerogyForm';
import DropHiddenButton from '../../../components/DropHiddenButton';
import CartDialog from './CartDialog';
import { useDispatch } from '../../../redux/store';
import { addFoodCart } from '../../../redux/slices/food';
import { getMockTypeData } from '../../../utils/functions';
import FoodCartCard from 'src/components/FoodCartCard';

// --------------------------------------------

const sort_type = [{ name: 'sort by Popularity' }, { name: 'sort by New' }, { name: 'sort by Oldest' }];

const foodData = [
  {
    id: '1',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '2',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '3',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '4',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '5',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '6',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '7',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '8',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '9',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '10',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '11',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '12',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '13',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '14',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '15',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '16',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '17',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
  {
    id: '18',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
    title: 'Chili pepper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    indigents:
      '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
    allergies:
      '6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis ifaucibus orci luctus ultrices posuere cubilia Curae.',
  },
];

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '& .search_bar': {
    justifyContent: 'space-between',
    marginTop: 2,
    paddingBottom: '20px',
    alignItems: 'center',
  },
  '& .defaultIconSize': {
    width: 22,
    height: 22,
  },
  '& .categorySection': {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  '& .listItemBtn': {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  '& .MuiOutlinedInput-root': {
    background: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    '& *': {
      border: 0,
    },
  },
}));

const SideBarStyle = styled(Box)(() => ({
  '& *': {
    transition: '500ms !important',
  },
}));

// --------------------------------------------

export default function FoodSection() {
  const [isHiddenCategory, setIsHiddenCategory] = useState(false);

  const [isOpenCartDlg, setIsOpenCartDlg] = useState(false);

  const [selectedItemData, setSelectedItemData] = useState({});

  const dispatch = useDispatch();

  const handleClickHideButton = () => {
    setIsHiddenCategory(!isHiddenCategory);
  };

  const handleClickItem = (data) => {
    setIsOpenCartDlg(true);
    setSelectedItemData({ ...data });
  };

  const handleClickAddCart = (data) => {
    dispatch(addFoodCart(data));
  };

  return (
    <RootStyle>
      <CartDialog data={selectedItemData} open={isOpenCartDlg} onClose={() => setIsOpenCartDlg(false)} />

      <Container>
        <Grid container spacing={15} pt={15}>
          <Grid item md={4} xs={12}>
            <SideBarStyle>
              <Box position={'relative'}>
                <MenuSearchForm />
                <DropHiddenButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={handleClickHideButton} />
              </Box>

              <MenuCategoryForm isOpen={!isHiddenCategory} mt={isHiddenCategory ? -2 : 3} />
              <MenuAllerogyForm isOpen={!isHiddenCategory} mt={isHiddenCategory ? -2 : 3} />
            </SideBarStyle>
          </Grid>
          <Grid item md={8}>
            <Grid container sx={{ marginTop: '-20px', marginBottom: '20px' }}>
              <Grid item md={8} sm={4} />
              <Grid item md={4} sm={12} xs={12}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  autoHighlight
                  options={sort_type}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="filled"
                      label="Choose a short"
                      size="small"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              {getMockTypeData(foodData).map((item) => (
                <Grid key={item.id} item lg={4} md={6} sm={6} xs={12}>
                  <FoodCartCard
                    name={item.name}
                    cover={`/assets/search-chef/foods/${item.filename}.png`}
                    price={item.price}
                    we_kc={`${item.weight} gr / ${item.kc} kc`}
                    onClick={() => handleClickItem(item)}
                    onClickPlus={() => handleClickAddCart(item)}
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
