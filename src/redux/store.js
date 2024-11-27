import { configureStore } from '@reduxjs/toolkit';
import materilsSlice from './slices/materilsSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    materils: materilsSlice,
    cart: cartSlice,
  },
});

export default store;
