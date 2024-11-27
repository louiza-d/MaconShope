import React, { useEffect } from 'react';
import Materil from '../components/Materil';

import { useDispatch, useSelector } from 'react-redux';
import { likeMateril, unlikeMateril } from '../redux/slices/materilsSlice';  // Actions Redux pour like/unlike
import { addToCart } from '../redux/slices/cartSlice';  // Action Redux pour ajouter au panier


function Materils() {

  const dispatch = useDispatch();  // Hook pour envoyer des actions Redux
  const materils = useSelector((state) => state.materils.list);  // Récupère les matériaux depuis le store Redux

  useEffect(() => {
    fetch('http://localhost:5000/api/materils')
      .then((response) => response.json())
      .then((data) => {
        console.log('Matériaux récupérés depuis l\'API: ', data);
        // nous n'avons plus besoin de localStorage ici car Redux gère les likes
        dispatch({ type: 'materils/setMaterils', payload: data });  // Action pour mettre à jour les matériaux dans Redux
      })
      .catch((error) => console.error('Erreur lors du chargement des matériaux:', error));
  }, [dispatch]);

   // Fonction pour basculer l'état "like"
   const toggleLike = (materilId) => {
    const userId = 1; // Remplacez par l'ID utilisateur actuel

    const isLiked = materils.some((materil) => materil.id === materilId && materil.liked);
    console.log('Matériel liké: ', materilId, userId);
    if (isLiked) {
      dispatch(unlikeMateril({ materilId, userId }));
    } else {
      dispatch(likeMateril({ materilId, userId }));
    }
  };

  // Fonction pour ajouter un matériau au panier
  const addToCartHandler = (materil) => {
    dispatch(addToCart(materil));  // Ajoute au panier via Redux
  };

  /** 
  const [materils, setMaterils] = useState([]); // État pour stocker les matériaux

  // Fonction pour charger les matériaux depuis l'API et appliquer les likes depuis localStorage
  useEffect(() => {
    fetch('http://localhost:5000/api/materils')
      .then((response) => response.json())
      .then((data) => {
        console.log('Matériaux récupérés depuis l\'API: ', data);

        // Charger les likes depuis localStorage
        const storedLikes = JSON.parse(localStorage.getItem('likes')) || {};
 
        // Mettre à jour les matériaux avec leurs likes
        const updatedMaterils = data.map(materil => ({
          ...materil,
          liked: storedLikes[materil.id] || false, // Appliquer l'état "liked"
        }));

        setMaterils(updatedMaterils); // Sauvegarder dans l'état local
      })
      .catch((error) => console.error('Erreur lors du chargement des matériaux:', error));
  }, []);

  
  // Fonction pour basculer l'état "like"
  const toggleLike = (id) => {
    const updatedMaterils = materils.map(materil => {
      if (materil.id === id) {
        materil.liked = !materil.liked; // Basculer l'état "liked"
      }
      return materil;
    });

    setMaterils(updatedMaterils); // Mettre à jour l'état local

    // Sauvegarder uniquement les likes dans localStorage
    const storedLikes = updatedMaterils.reduce((acc, materil) => {
      acc[materil.id] = materil.liked;
      return acc;
    }, {});

    localStorage.setItem('likes', JSON.stringify(storedLikes));
  };
*/
  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>Nos Matériaux</h1>
      <div className="row">
        {materils.map((materil) => (
          <div className="col-md-3 mb-4" key={materil.id}>
            <Materil 
              materil={materil} 
              toggleLike={toggleLike}
              addToCartHandler={addToCartHandler} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Materils;
