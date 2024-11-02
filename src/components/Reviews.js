import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa'; 

import image1 from '../image/manishi-1.jpeg';
import image2 from '../image/manishi-2.jpg';
import image3 from '../image/manishi-3.webp';

const ReviewCard = ({ image, name, reviewText }) => {
    return (
        <div className="box">
            <img src={image} alt={`Review from ${name}`} />
            <h3>{name}</h3>
            <p>{reviewText}</p>
            <div className="stars">
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStar /></i>
                <i><FaStarHalf /></i>
            </div>
        </div>
    );
};

const Reviews = () => {
    const reviewsData = [
        {
            id: 1,
            name: 'Afreen',
            image: image1,
            reviewText: 'bkjhosjhoijpvjoovoijpeip vbkjpvi kvjiojv',
        },
        {
            id: 2,
            name: 'Ajay',
            image: image2,
            reviewText: 'bkjhosjhoijpvjoovoijpeip vbkjpvi kvjiojv',
        },
        {
            id: 3,
            name: 'Manogna',
            image: image3,
            reviewText: 'bkjhosjhoijpvjoovoijpeip vbkjpvi kvjiojv',
        },
    ];

    return (
        <section className="reviews" id='reviews'>
            <h1 className="heading"><span>Client's Reviews</span></h1>
            <div className="reviews-container">
                {reviewsData.map(review => (
                    <ReviewCard 
                        key={review.id} 
                        image={review.image} 
                        name={review.name} 
                        reviewText={review.reviewText} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
