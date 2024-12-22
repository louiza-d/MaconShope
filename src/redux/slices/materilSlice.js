import { createSlice } from '@reduxjs/toolkit';



const materilSlice = createSlice({
  name: 'materil', // Le nom du slice
  initialState : {  
    likedUsers: {}, 
    loading: false, 
    error: null,
  },
  reducers: {}, 
  extraReducers: (builder) => {
    
    builder
      .addCase('FETCH_LIKED_USERS_REQUEST', (state) => {
        state.loading = true;
        state.loading = true; // Mise à jour de l'état pour le chargement
      })
      .addCase('FETCH_LIKED_USERS_SUCCESS', (state, action) => {
        const { materilId, likedUsers } = action.payload;
        state.loading = false; // Fin du chargement
        state.likedUsers[materilId] = likedUsers; // Mise à jour des utilisateurs
        console.log("Etat Redux après FETCH_LIKED_USERS_SUCCESS:", state.likedUsers);

      })
      .addCase('FETCH_LIKED_USERS_FAILURE', (state, action) => {
        state.loading = false; 
        state.error = action.payload.error; // Sauvegarder l'erreur
      });
  },
});

/*export const { toggleLike } = materilSlice.actions;*/
export default materilSlice.reducer;
