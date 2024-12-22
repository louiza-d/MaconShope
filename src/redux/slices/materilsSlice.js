import { createSlice,  } from '@reduxjs/toolkit';

const materilsSlice = createSlice({
  name: 'materils',
  initialState: {
    loading: false,
    materils: [],
    error: null,
   likedMaterils: [], // Tableau des matériaux likés
   likedUsersByMateril: {},
},
  reducers: {
    
    LIKE_MATERIL_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    LIKE_MATERIL_SUCCESS: (state, action) => {
      state.loading = false;
      // Met à jour l'état avec les nouveaux matériaux likés
      const { materilId, isLiked } = action.payload;
      if (isLiked) {
        // Si isLiked est true, ajouter l'ID à likedMaterils
        if (!state.likedMaterils.includes(materilId)) {
          state.likedMaterils.push(materilId);
        }
      } else {
        // Si isLiked est false, retirer l'ID de likedMaterils
        state.likedMaterils = state.likedMaterils.filter(id => id !== materilId);
      }// Ajouter l'ID du matériau dans le tableau likedMaterils
    },
    LIKE_MATERIL_FAILURE: (state, action) => {
      state.loading = false;
      const { materilId } = action.payload;
      state.likedMaterils = state.likedMaterils.filter(id => id !== materilId); // Retirer l'ID du tableau likedMaterils
    
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase('FETCH_MATERILS_REQUEST', (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase('FETCH_MATERILS_SUCCESS', (state, action) => {
        state.loading = false;
        state.materils = action.payload; // Mettez les données dans l'état global
      })
      .addCase('FETCH_MATERILS_FAILURE', (state, action) => {
        state.loading = false;
        state.error = action.payload; // Mettez l'erreur dans l'état global
      });
  },

});

export const { LIKE_MATERIL_REQUEST, LIKE_MATERIL_SUCCESS, LIKE_MATERIL_FAILURE } = materilsSlice.actions;
export default materilsSlice.reducer;
