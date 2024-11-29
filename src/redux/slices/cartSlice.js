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

    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1); // Supprime un article par index
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
