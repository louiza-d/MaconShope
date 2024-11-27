import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Liste des matériaux ajoutés au panier
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const materil = action.payload;
      state.items.push(materil);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
