import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeaturedBooks from './components/FeaturedBooks';
import NewArrivals from './components/NewArrivals';
import Reviews from './components/Reviews';
import Donate from './components/Donate';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/featured-books" element={<FeaturedBooks />} />
                    <Route path="/new-arrivals" element={<NewArrivals />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
