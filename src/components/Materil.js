import React from 'react';
import  { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikedUsers } from '../actions/materielAction';


function Materil({ materil, toggleLike, addToCartHandler }) {
  
  const [showUsers, setShowUsers] = useState(false); // État pour afficher/masquer la liste
  const [tooltip, setTooltip] = useState(false); // État pour afficher le message au survol

  const dispatch = useDispatch();
  const likedUsers = useSelector(
    (state) => state.materil.likedUsers[materil.id] || []
  );

console.log("likedUsers:" , likedUsers);

 // Fonction pour charger les utilisateurs
 const handleClick = async () => {
  console.log("materilId:", materil.id); 
     await dispatch(fetchLikedUsers(materil.id));
    setShowUsers(true); // Affiche la liste des utilisateurs
 
};

 // Fonction pour afficher le message au survol
 const handleMouseEnter = () => {
  setTooltip(true);
};
// Fonction pour masquer le message au survol
const handleMouseLeave = () => {
  setTooltip(false);
};

  const handleLike = () => {
    toggleLike(materil.id);
  };
  return (
    
    <div className="card">
      <img src={`http://localhost:5000${materil.image}`} className="card-img-top" alt={materil.nom} />
      <div className="card-body">
        <h5 className="card-title">{materil.name}</h5>
        <p className="card-text">{materil.description}</p>
        <p className="card-text">
          <strong
          >Prix: </strong>{materil.price} DA</p>
        <p
            className="card-text"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ cursor: 'pointer', textDecoration: 'underline', position: 'relative' }}  
         >
          <strong> Nombre de like :  </strong>{materil.likesCount}

          {tooltip && (
            <span
              style={{
                position: 'absolute',
                backgroundColor: '#f8f9fa',
                border: '1px solid #ccc',
                padding: '5px',
                borderRadius: '4px',
                top: '100%',
                left: 0,
                zIndex: 1,
                fontSize: '12px',
                color: '#333',
              }}
            >
              cliquez pour voir les utilisateurs
            </span>
          )}
          </p> 

           {showUsers && likedUsers.length > 0 && (
          <ul>
            {likedUsers.map((user) => (
              <li key={user.id}>
                {user.fullName} ({user.login})
                </li>
            ))}
          </ul>
        )}

        <button className="btn btn-secondary text-warning me-4" 
        onClick={() => addToCartHandler(materil)}>Ajouter au panier</button>

        <button
            onClick={handleLike}
            className={`btn btn-${materil.liked ? 'danger' : 'secondary'} rounded-circle`}
            style={{ width: '40px', height: '40px', justifyContent: 'center', alignItems: 'center' }}
        >
          <i className={`bi bi-heart${materil.liked ? '-fill' : ''}`}></i>
        </button>

      </div>
  </div>
 
  );
   
  
}


export default Materil;
