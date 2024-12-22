// actions/materilActions.js
import { fetchData } from '../api';

// recuperer le mat
export const fetchMaterils = () => async dispatch => {
  dispatch({ type: 'FETCH_MATERILS_REQUEST' });
  
  try {
    const materils = await fetchData({
      url: 'http://localhost:5000/api/materils',
      method: 'GET',

    });
    console.log('Données reçues:', materils);
    dispatch({ type: 'FETCH_MATERILS_SUCCESS', payload: materils });
  } catch (err) {
    console.error("Error fetching materils", err);
    dispatch({ type: 'FETCH_MATERILS_FAILURE', payload: err.message });
  }
};

// liker les mat 
export const likeMateril = (userId, materilId) => async (dispatch) => {
  try {
    dispatch({ type: 'LIKE_MATERIL_REQUEST' });

    // Envoie une requête POST pour liker le matériau
    const response = await fetchData({
      url: `http://localhost:5000/api/materils/like/${materilId}`,
      method: 'POST',
      data: { userId }, // Envoi des ids nécessaires
    });

    const { isLiked } = response;
    dispatch({ 
      type: 'LIKE_MATERIL_SUCCESS', 
      payload: { materilId, isLiked },
     });

  } catch (error) {
    dispatch({ type: 'LIKE_MATERIL_FAILURE', payload: { materilId, error: error.message } });
  }
};

// liste des userLike

export const fetchLikedUsers = (materilId) => async (dispatch) => {
  dispatch({ type: 'FETCH_LIKED_USERS_REQUEST', payload: materilId });

  try {
    const likedUsers = await fetchData({
      url: `http://localhost:5000/api/materils/${materilId}/likedUsers`,
      method: 'GET',
    });
    console.log('Données reçues:', { materilId, likedUsers });
    dispatch({
      type: 'FETCH_LIKED_USERS_SUCCESS',
      payload: { materilId, likedUsers },
    });
  } catch (error) {
    console.error('Error fetching liked users:', error);
    dispatch({
      type: 'FETCH_LIKED_USERS_FAILURE',
      payload: { materilId, error: error.message },
    });
  }
};