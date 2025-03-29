import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useReviews } from "../components/ReviewContext";
import booksData from "../components/booksData";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "../App.css";

const ProductDetails = () => {
    const { id } = useParams();
    const book = booksData.find(book => book.id === parseInt(id));
    const { addToCart } = useCart();
    const { reviews, addReview } = useReviews();
    const [reviewForm, setReviewForm] = useState({ name: "", comment: "", rating: 5 });

    if (!book) return <h2>Book not found</h2>;

    const handleReviewSubmit = () => {
        if (reviewForm.name.trim() && reviewForm.comment.trim()) {
            addReview(book.id, reviewForm);
            setReviewForm({ name: "", comment: "", rating: 5 });
            alert("Review added successfully!");
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="product-details">
            <h1>{book.title}</h1>
            <img src={book.img} alt={book.title} className="book-image-large" />
            <p>{book.description}</p>
            <button className="order-button" onClick={() => addToCart(book)}>Order Now</button>

            {/* Display Reviews Section */}
            <h2>Customer Reviews</h2>
            <div className="reviews-container">
                {reviews[book.id]?.length > 0 ? (
                    reviews[book.id].map((review, index) => (
                        <div key={index} className="review-box">
                            <h3>{review.name}</h3>
                            <p>{review.comment}</p>
                            <div className="stars">
                                {[...Array(Math.floor(review.rating))].map((_, i) => <FaStar key={i} />)}
                                {review.rating % 1 !== 0 && <FaStarHalf />}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to review!</p>
                )}
            </div>

            {/* Add Review Section */}
            <h2>Add a Review</h2>
            <div className="review-form">
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={reviewForm.name} 
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                />
                <textarea 
                    placeholder="Your Review" 
                    value={reviewForm.comment} 
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                />
                <select 
                    value={reviewForm.rating} 
                    onChange={(e) => setReviewForm({ ...reviewForm, rating: parseFloat(e.target.value) })}
                >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Terrible</option>
                </select>
                <button onClick={handleReviewSubmit}>Submit Review</button>
            </div>
        </div>
    );
};

export default ProductDetails;
