import React from "react";
import BookList from "../components/BookList";
import booksData from "../components/booksData";

const NewArrivals = () => {
  const newArrivals = booksData.filter((book) => book.isNewArrival);
  return <BookList sectionTitle="New Arrivals" books={newArrivals} />;
};

export default NewArrivals;
