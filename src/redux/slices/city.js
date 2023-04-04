// axios
import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  loading: false,
  error: null,
  city: null,
  cities: [],
  cuisine: null,
  cuisines: [],
  chef: null,
  chefs: [],
};

// ----------------------------------------------------------------------

const slice = createSlice({
  name: 'cityCuisine',
  initialState,
  reducers: {
    startLoading(state) {
      state.loading = true;
    },
    hasError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    //
    getCitiesSuccess(state, action) {
      state.loading = false;
      state.cities = action.payload;
    },

    //
    getCuisinesSuccess(state, action) {
      state.loading = false;
      state.cuisines = action.payload;
    },

    //
    getChefsSuccess(state, action) {
      state.loading = false;
      state.chefs = action.payload;
    },

    //
    getCuisine(state, action) {
      state.cuisine = state.cuisines.find(({ id }) => id == action.payload);
    },

    //
    getChef(state, action) {
      state.chef = state.chefs.find(({ id }) => id == action.payload);
    }
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading } = slice.actions;

// Selector
export const CITYCUISINE_SELECTOR = (state) => state.cityCuisine;

// API Hander

// ----------------------------------------------------------------------

export function getCities() {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(`/api/${process.env.API_VERSION}/cities`);
      dispatch(slice.actions.getCitiesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getCuisines() {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(`/api/${process.env.API_VERSION}/cuisines`);
      dispatch(slice.actions.getCuisinesSuccess(response.data.cuisines));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------

export function getChefs(cuisineId, chefId = null) {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.get(`/api/${process.env.API_VERSION}/cities/${cuisineId}/chefs`);
      dispatch(slice.actions.getChefsSuccess(response.data));
      dispatch(slice.actions.getCuisine(cuisineId));
      if (chefId) dispatch(slice.actions.getChef(chefId));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
