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
    cart: [
      // {
      //   id: 3,
      //   title: 'Pelmeni',
      //   current_price: 8,
      //   old_price: null,
      //   sold_out: null,
      //   description: 'Lorem ipsum dolor sit amet',
      //   allergy: 'Lorem ipsum dolor sit amet',
      //   gramm: null,
      //   ingredients: 'Lorem ipsum dolor sit amet',
      //   how_to_prepare: 'Lorem ipsum dolor sit amet',
      //   size: 1,
      //   user_id: 1,
      //   cuisine_id: 4,
      //   image_url:
      //     'http://13.238.200.214//rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBNQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a2bc2e3b21d93d8ba828ed20ccb823c0b0aa1519/nici.jpg',
      // },
    ],
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
      if (action.payload.newAddCart) {
        state.checkout.cart = [];
      }
      const newDatas = Array.isArray(action.payload.foods) ? action.payload.foods : [action.payload.foods];
      state.checkout.cart = [...state.checkout.cart, ...newDatas];
    },
    removeFoodCart(state, action) {
      state.checkout.cart = [...state.checkout.cart.filter(({ _id }) => _id !== action.payload._id)];
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { addFoodCart, removeFoodCart, setError } = slice.actions;

// Selector
export const FOOD_SELECTOR = (state) => state.food;
