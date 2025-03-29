import React from "react";
import { useCart } from "../components/CartContext";
import "../App.css";

const Cart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((book) => (
            <div key={book.id} className="cart-item">
              <img src={book.img} alt={book.title} className="cart-image" />
              <div className="cart-info">
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <div className="cart-buttons">
                  <button className="quantity-btn" onClick={() => updateQuantity(book.id, book.quantity - 1)}>-</button>
                  <span>{book.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(book.id, book.quantity + 1)}>+</button>
                  <button className="order-btn" onClick={() => alert(`Order placed for: ${book.title}`)}>Order</button>
                  <button className="remove-btn" onClick={() => removeFromCart(book.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
