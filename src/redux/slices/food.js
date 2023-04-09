import { createSlice } from '@reduxjs/toolkit';
// axios
import axios from 'src/utils/axios';
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  loading: false,
  error: null,
  foods: [],
  popularFoods: [],
  food: null,
  sortBy: null,
  filters: {
    category: 'All',
    priceRange: '',
    rating: '',
  },
  checkout: {
    orderId: null,
    orderDetail: null,
    activeStep: 0,
    cart: [],
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
      } else if (action.payload?.deliveryDate) {
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

    clearCart(state) {
      state.checkout.cart = [];
    },

    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    getFoodsSuccess(state, action) {
      state.loading = false;
      state.foods = action.payload;
    },

    getPopularFoodsSuccess(state, action) {
      state.loading = false;
      state.popularFoods = action.payload;
    },

    setOrderId(state, action) {
      state.loading = false;
      state.checkout.orderId = action.payload;
    },

    setOrderDetail(state, action) {
      state.loading = false;
      state.checkout.orderDetail = action.payload;
    },

    setDeliveryInstructions(state, action) {
      console.log('action.payload: ', action.payload);
      state.loading = false;
      state.checkout.orderDetail = {
        ...state.checkout.orderDetail,
        delivery_instructions: action.payload,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  startLoading,
  addFoodCart,
  removeFoodCart,
  clearCart,
  setError,
  setOrderId,
  setOrderDetail,
  setDeliveryInstructions,
} = slice.actions;

// Selector
export const FOOD_SELECTOR = (state) => state.food;

export function createOrders(data) {
  return async (dispatch) => {
    const oreders = data.carts.map(({ id, count }) => ({
      food_id: id,
      count: count,
      selected_day: data.selectedDay,
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
      dispatch(slice.actions.setOrderId(response.data.success.id));
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
      dispatch(slice.actions.getFoodsSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}

export function getOrderDetail(orderId) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(`/api/${process.env.API_VERSION}/orders/${orderId}/details`);
      dispatch(slice.actions.setOrderDetail(response.data));
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}

export function addTips(data) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.post(`/api/${process.env.API_VERSION}/orders/${data.orderId}/add_tips`, {
        tips: data.tips,
      });
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}

export function updateDeliveryInstructions(data) {
  console.log('data: ', data);
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.post(
        `/api/${process.env.API_VERSION}/orders/${data.orderId}/update_delivery_instructions`,
        {
          leave_at_door: data.status,
          delivery_instructions: data.note,
        }
      );
      dispatch(slice.actions.setDeliveryInstructions(data.note));
      return response.data;
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}

//
// ----------------------------------------------------------------------
export function getPopularFoods() {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(`/api/${process.env.API_VERSION}/foods`);
      dispatch(slice.actions.getPopularFoodsSuccess(response.data.foods?.sort(() => Math.random() - 0.5)));
    } catch (error) {
      dispatch(slice.actions.setError(error));
    }
  };
}
