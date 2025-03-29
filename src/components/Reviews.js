import React from "react";
import { useReviews } from "../components/ReviewContext";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ReviewCard = ({ name, reviewText, rating }) => {
    return (
        <div className="box">
            <h3>{name}</h3>
            <p>{reviewText}</p>
            <div className="stars">
                {[...Array(Math.floor(rating))].map((_, i) => <FaStar key={i} />)}
                {rating % 1 !== 0 && <FaStarHalf />}
            </div>
        </div>
    );
};

const Reviews = () => {
    const { reviews } = useReviews();
    const allReviews = Object.values(reviews).flat();

    return (
        <section className="reviews" id="reviews">
            <h1 className="heading"><span>Client's Reviews</span></h1>
            <div className="reviews-container">
                {allReviews.length > 0 ? (
                    allReviews.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
        </section>
    );
};

export default Reviews;
