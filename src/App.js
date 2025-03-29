import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ React Router imports
// ✅ Import context providers
import { CartProvider } from "./components/CartContext"; 
import { ReviewProvider } from "./components/ReviewContext"; 
// ✅ Import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FeaturedBooks from "./components/FeaturedBooks";
import NewArrivals from "./components/NewArrivals";
import Reviews from "./components/Reviews";
import Donate from "./components/Donate";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup"; // ✅ Import Signup
import ProductDetails from "./components/ProductDetails"; 
// ✅ Import books data
import booksData from "./components/booksData";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <ReviewProvider> 
        <Router>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured-books" element={<FeaturedBooks />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} /> {/* ✅ Add Signup Route */}
            <Route path="/product/:id" element={<ProductDetails books={booksData} />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Router>
      </ReviewProvider>
    </CartProvider>
  );
};

export default App;