import styled from '@emotion/styled';
import {
  Autocomplete,
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import FoodCard from 'src/components/FoodCard';
import MenuSearchForm from './MenuSearchForm';
import Foodpagination from './Foodpagination';
import MenuCategoryForm from './MenuCategoryForm';
import MenuAllerogyForm from './MenuAllerogyForm';
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
  },
  {
    id: '2',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '3',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '4',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '5',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '6',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '7',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '8',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '9',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '10',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '11',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '12',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '13',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '14',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '15',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '16',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '17',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
  {
    id: '18',
    filename: 'chilli_pepper',
    name: 'chillid pepper',
    price: '9.99',
    weight: '250',
    kc: '430',
  },
];

// --------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#F3F3F3',
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
  }
}));

// --------------------------------------------

export default function FoodSection() {

  return (
    <RootStyle>
      <Container maxWidth="xl">
        <Grid container spacing={15} pt={15} pb={8}>
          <Grid item md={4} xs={12}>
            <MenuSearchForm />
            <MenuCategoryForm />
            <MenuAllerogyForm />
          </Grid>
          <Grid item md={8}>
            <Grid container sx={{ marginTop: '-20px', marginBottom: '20px' }}>
              <Grid item md={8} sm={4}></Grid>
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
                      label="Choose a short"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                      }}
                    />
                  )}
                />
              </Grid>
            </Grid>

            <Grid container>
              {foodData.map((item) => (
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <FoodCard
                    key={item.id}
                    name={item.name}
                    cover={`/assets/menu/foods/${item.filename}.png`}
                    price={item.price}
                    we_kc={`${item.weight} gr / ${item.kc} kc`}
                  />
                </Grid>
              ))}
            </Grid>
            <Foodpagination />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
