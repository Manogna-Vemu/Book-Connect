import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import booksData from '../components/booksData'; // Import booksData
import '../App.css';

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
        <a href="/#" className="btn">Get Book Now</a>
      </div>

      <div className="book-slider">
        <h3>Explore Books</h3>
        <Slider {...settings}>
          {booksData.slice(0, 5).map(book => ( // Display first 5 books
            <div key={book.id} className="book-card">
              <div className="card" style={{ width: '18rem' }}>
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
