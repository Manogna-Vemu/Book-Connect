//these are new arrivals
import React from 'react';
import '../App.css'; 

import chemistry from '../image/book-1.jpg'; 
import english from '../image/book-2.webp';
import englishgrammer from '../image/book-3.jpg';
import html from '../image/book-4.jpg';
import physics from '../image/book-5.webp';
import biology from '../image/book-6.jpg';
import environmentalscience from '../image/book-7.jpg';
import mathematicsapptidute from '../image/book-8.jpg';
import java from '../image/book-9.jpeg';

const newBooks = [
    { id: 1, title: 'Chemistry', img: chemistry },
    { id: 2, title: 'English', img: english },
    { id: 3, title: 'English Grammar', img: englishgrammer },
    { id: 4, title: 'HTML Basics', img: html },
    { id: 5, title: 'Physics Fundamentals', img: physics },
    { id: 6, title: 'Biology Insights', img: biology },
    { id: 7, title: 'Environmental Science', img: environmentalscience },
    { id: 8, title: 'Mathematics Aptitude', img: mathematicsapptidute },
    { id: 9, title: 'Java Programming', img: java },
];

const NewArrivals = () => {
    return (
        <div className="new-arrivals">
             <h1 style={{ textAlign: 'center', fontSize: '2em', color: '#333', marginBottom: '20px' }}>
                New Arrivals
            </h1>
            <div className="book-card-container">
                {newBooks.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.img} alt={book.title} className="book-image" />
                        <h2 className="book-title">{book.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;
