import { createSlice } from '@reduxjs/toolkit';
// axios
import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

const initialState = {
  loading: false,
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
    deliveryDate: null,
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
    startLoading(state) {
      state.loading = true;
    },

    addFoodCart(state, action) {
      if (action.payload.newAddCart) {
        state.checkout.cart = [];
      }
      else if (action.payload?.deliveryDate) {
        state.checkout.deliveryDate = action.payload.deliveryDate;
      }
      const newDatas = Array.isArray(action.payload.foods) ? action.payload.foods : [action.payload.foods];
      state.checkout.cart = [...state.checkout.cart, ...newDatas];
    },

    removeFoodCart(state, action) {
      if (action.payload.removeAll) {
        state.checkout.cart = [...state.checkout.cart.filter(({ _id }) => _id !== action.payload.food._id)];
      } else {
        const indexToRemove = state.checkout.cart.findIndex((obj) => obj.id === action.payload.food._id);
        state.checkout.cart.splice(indexToRemove, 1);
      }
    },

    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    getFoodsSuccess(state, action) {
      state.loading = false;
      state.foods = action.payload.data;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, addFoodCart, removeFoodCart, setError } = slice.actions;

// Selector
export const FOOD_SELECTOR = (state) => state.food;

export function createOrders(data) {
  return async (dispatch) => {
    const oreders = data.carts.map(({ id, count }) => ({
      food_id: id,
      count: count,
      selected_day: new Date(),
    }));

    dispatch(startLoading());
    try {
      const response = await axios.post(`/api/${process.env.API_VERSION}/orders/create`, {
        order: {
          chef_id: data.chefId,
          status: 'initiated',
          items_attributes: oreders,
        },
      });
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}

export function getFoodsByChef(cityId, cuisineId, chefId) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(
        `/api/${process.env.API_VERSION}/cities/${cityId}/cuisines/${cuisineId}/chefs/${chefId}`
      );
      dispatch(slice.actions.getFoodsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}
