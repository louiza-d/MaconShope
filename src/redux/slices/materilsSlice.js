import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  likedMaterils: [], // Liste des IDs des matériaux likés
  usersWhoLiked: {}, // Clé : ID du matériel, Valeur : tableau d'IDs d'utilisateurs
};

const materilsSlice = createSlice({
  name: 'materils',
  initialState,
  reducers: {
    setMaterils(state, action) {
      state.list = action.payload; // Mettre à jour la liste des matériaux
    },
    likeMateril(state, action) {
      const { materilId, userId } = action.payload;

       const materil = state.list.find((m) => m.id === materilId);
  if (materil && !materil.liked) {
    materil.liked = true; // Met à jour directement l'objet dans `state.list`
    state.likedMaterils.push(materilId);

    if (!state.usersWhoLiked[materilId]) {
      state.usersWhoLiked[materilId] = [];
    }
    state.usersWhoLiked[materilId].push(userId);
  }
    },
    unlikeMateril(state, action) {
      const { materilId, userId } = action.payload;
      
      const materil = state.list.find((m) => m.id === materilId);
  if (materil && materil.liked) {
    materil.liked = false; // Met à jour directement l'objet dans `state.list`
    state.likedMaterils = state.likedMaterils.filter((id) => id !== materilId);

    if (state.usersWhoLiked[materilId]) {
      state.usersWhoLiked[materilId] = state.usersWhoLiked[materilId].filter((id) => id !== userId);
    }
  }
    },
  },
});

export const { setMaterils, likeMateril, unlikeMateril } = materilsSlice.actions;
export default materilsSlice.reducer;
