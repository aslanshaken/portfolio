import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import dialogReducer from './slices/dialog';
// slices
import foodReducer from './slices/food';

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const foodPersistConfig = {
  key: 'food',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy'],
};

const rootReducer = combineReducers({
  food: persistReducer(foodPersistConfig, foodReducer),
  dialog: dialogReducer,
});

export { rootPersistConfig, rootReducer };
