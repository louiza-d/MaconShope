import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Materil({ materil, toggleLike, addToCartHandler }) {


  const handleLike = () => {
    toggleLike(materil.id);
  };
  return (
    
    <div className="card">
      <img src={`http://localhost:5000${materil.image}`} className="card-img-top" alt={materil.nom} />
      <div className="card-body">
        <h5 className="card-title">{materil.title}</h5>
        <p className="card-text">{materil.description}</p>
        <p className="card-text">
          <strong>Prix: </strong>{materil.prix} DA</p>

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
