import React, { createContext, useContext, useState } from "react";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState({}); // Store reviews by book ID

    const addReview = (bookId, newReview) => {
        setReviews(prevReviews => ({
            ...prevReviews,
            [bookId]: [...(prevReviews[bookId] || []), newReview]
        }));
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviews = () => useContext(ReviewContext);
