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
    addFoodCart(state, action) {
      state.checkout.cart = [...state.checkout.cart, action.payload];
    },
    removeFoodCart(state, action) {
      state.checkout.cart = [...state.checkout.cart.filter(({ _id }) => _id !== action.payload._id)];
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addFoodCart, removeFoodCart } = slice.actions;

// Selector
export const FOOD_SELECTOR = (state) => state.food;

