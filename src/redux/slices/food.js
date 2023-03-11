import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  foods: [],
  food: null,
  sortBy: null,
  filters: {
    category: 'All',
    priceRange: '',
    rating: '',
  },
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    delivering: 0,
    billing: null,
  },
};

const slice = createSlice({
  name: 'food',
  initialState,
  reducers: {
  },
});

// Reducer
export default slice.reducer;