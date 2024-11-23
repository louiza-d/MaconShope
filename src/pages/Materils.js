import React, { useEffect, useState } from 'react';
import Materil from '../components/Materil';

function Materils() {
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

  return (
    <div className="container">
      <h1 className='text-center mt-4 mb-4'>Nos Matériaux</h1>
      <div className="row">
        {materils.map((materil) => (
          <div className="col-md-3 mb-4" key={materil.id}>
            <Materil materil={materil} toggleLike={toggleLike} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Materils;
