import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import "../App.css";

const BookList = ({ sectionTitle, books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToCart } = useCart();

  const handleBookClick = (book) => setSelectedBook(book);
  const handleCloseDetails = () => setSelectedBook(null);

  return (
    <div className="book-section">
      <h1 className="section-title">{sectionTitle}</h1>
      <div className="book-card-container">
        {books.map((book) => (
          <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
            <img src={book.img} alt={book.title} className="book-image" />
            <h2 className="book-title">{book.title}</h2>
            <p className="book-description">{book.description}</p>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="modal-overlay" onClick={handleCloseDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseDetails}>X</button>
            <div className="book-details">
              <img src={selectedBook.img} alt={selectedBook.title} className="modal-image" />
              <div className="book-info">
                <h2>{selectedBook.title}</h2>
                <p>{selectedBook.description}</p>
                <p>⭐ Rating: 4.5</p>
                <button className="add-to-cart" onClick={() => addToCart(selectedBook)}>Add to Cart</button>
                <button className="order-now" onClick={() => alert("Order placed successfully!")}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
