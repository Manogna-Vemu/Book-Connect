import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';

import chemistryImage from '../image/book-1.jpg';
import englishImage from '../image/book-2.webp';
import englishGrammarImage from '../image/book-3.jpg';
import htmlImage from '../image/book-4.jpg';
import physicsImage from '../image/book-5.webp';

const books = [
  { id: 1, title: 'Chemistry', img: chemistryImage },
  { id: 2, title: 'English', img: englishImage },
  { id: 3, title: 'English Grammar', img: englishGrammarImage },
  { id: 4, title: 'HTML', img: htmlImage },
  { id: 5, title: 'Physics', img: physicsImage },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-container">
      <div className="home-description">
        <h2>Share, Swap, and Enrich Lives...</h2>
        <p>By exchanging and donating books, we empower communities to learn, grow, and thrive. Together, we make knowledge accessible to all, fostering a world where every book finds a new home, and every reader gains a new opportunity.</p>
        <a href="/#" className="btn">Get Book Now</a> {}
      </div>

      <div className="book-slider">
        <h3>Explore Books</h3>
        <Slider {...settings}>
          {books.map(book => (
            <div key={book.id} className="book-card">
              <div className="card" style={{ width: '18rem' }}> {}
                <img src={book.img} alt={book.title} className="card-img-top book-image" />
                <div className="card-body">
                  <h5 className="card-title book-title">{book.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>  
  );
};

export default Home;
