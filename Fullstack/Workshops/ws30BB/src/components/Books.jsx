/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useState, useEffect } from "react";
import { fetchBooks } from "../API";
import { BrowserRouter } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { books } = await fetchBooks();
      setBooks(books)
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1> ~*Books*~ </h1>
    </div>
  );
};

export default Books;