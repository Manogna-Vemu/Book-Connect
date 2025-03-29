import React from "react";
import BookList from "../components/BookList";
import booksData from "../components/booksData";

const FeaturedBooks = () => {
  const featuredBooks = booksData.filter((book) => book.isFeatured);
  return <BookList sectionTitle="Featured Books" books={featuredBooks} />;
};

export default FeaturedBooks;
