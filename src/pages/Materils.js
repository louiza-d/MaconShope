import React, { useEffect } from 'react';
import Materil from '../components/Materil';
import { useDispatch, useSelector } from 'react-redux';
//import { LIKE_MATERIL_SUCCESS} from '../redux/slices/materilsSlice';  // Actions Redux pour like/unlike
import { addToCart } from '../redux/slices/cartSlice';  // Action Redux pour ajouter au panier
import { fetchMaterils, likeMateril,  } from '../actions/materielAction';


const Materils = () => {

  const dispatch = useDispatch();  // Hook pour envoyer des actions Redux
    // Récupère les matériaux depuis le store Redux*/
  const { loading, materils, error} = useSelector((state) => state.materils);

  useEffect(() => {
    dispatch(fetchMaterils());
  }, [dispatch]);

  console.log('Materils Redux State:', materils);

   // Fonction pour basculer l'état "like"
   const toggleLike = (materilId) => {
    const userId = 1; // Remplacez par l'ID utilisateur actuel

   /* const isLiked =  likedMaterils && likedMaterils.some(id => id === materilId);

   

    if (isLiked) {
    
      dispatch(LIKE_MATERIL_SUCCESS({userId, materilId }));
    }*/

    dispatch(likeMateril(userId, materilId));
  };

  // Fonction pour ajouter un matériau au panier
  const addToCartHandler = (materil) => {
    dispatch(addToCart(materil));  // Ajoute au panier via Redux
  };
   
  if (loading) return <div><p>Chargement des matériaux...</p></div>;
  if (error) return <div><p>Erreur : {error}</p></div>;
  
  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>Nos Matériaux</h1>
      <div className="row">
        { materils.length > 0 ? (
           materils.map((materil) => (
          <div className="col-md-3 mb-4" key={materil.id}>
            <Materil 
              materil={materil} 
              toggleLike={toggleLike}
              addToCartHandler={addToCartHandler} />
          </div>
        ))   
      ) : (
        <p className="text-center">Aucun matériau disponible.</p>
      )  
      }
      </div>
    </div>
  );
}
export default Materils;
