import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext"; // Import Cart Context
import "../App.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { cart } = useCart(); // Get cart items

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav>
      <div className="navbar-title">Book Connect</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/featured-books" className={({ isActive }) => (isActive ? "active" : "")}>Featured Books</NavLink>
        <NavLink to="/new-arrivals" className={({ isActive }) => (isActive ? "active" : "")}>New Arrivals</NavLink>
        <NavLink to="/reviews" className={({ isActive }) => (isActive ? "active" : "")}>Reviews</NavLink>
        <NavLink to="/donate" className={({ isActive }) => (isActive ? "active" : "")}>Donate</NavLink>
        <NavLink to="/cart" className="cart-link">Cart ({cart.length})</NavLink>

        {!isLoggedIn ? (
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
