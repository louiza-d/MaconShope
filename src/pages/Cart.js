import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // Simuler une requête au backend
    console.log('Acheter :', cartItems); // alert('Achat effectué avec succès !');
    dispatch(clearCart()); // vider tt le panier
   
  };

  const handleRemoveItem = (index) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
    if (confirmDelete) {
      dispatch(removeFromCart(index)); // Supprime l'article si confirmé
    }
  };

  return (
    <div className="container">
      <h1>Panier</h1>
      <div className="list-group">
        {cartItems.map((item, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{item.title}</h5>
              <small>{item.prix} DA</small>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveItem(index)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleCheckout} className="btn btn-success ">
        Acheter
      </button>
    </div>
  );
}

export default Cart;
