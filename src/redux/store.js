import { configureStore } from '@reduxjs/toolkit';
import materilsSlice from './slices/materilsSlice';
import cartSlice from './slices/cartSlice';
import materilSlice from './slices/materilSlice'

const store = configureStore({
  reducer: {
    materils: materilsSlice,
    materil: materilSlice,
    cart: cartSlice,
  },
});

export default store;
