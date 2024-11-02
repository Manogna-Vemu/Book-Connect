import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-title">Book Connect</div>
            <div className="navbar-links">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/featured-books" activeClassName="active">Featured Books</NavLink>
                <NavLink to="/new-arrivals" activeClassName="active">New Arrivals</NavLink>
                <NavLink to="/reviews" activeClassName="active">Reviews</NavLink>
                <NavLink to="/donate" activeClassName="active">Donate</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
