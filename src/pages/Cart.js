import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // Simuler une requête au backend
    console.log('Acheter :', cartItems);
    dispatch(clearCart());
   // alert('Achat effectué avec succès !');
  };

  return (
    <div className="container">
      <h1>Panier</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.prix}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout} className="btn btn-success">
        Acheter
      </button>
    </div>
  );
}

export default Cart;
