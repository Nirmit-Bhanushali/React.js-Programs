import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Book Library</h1>
      <BookList books={books} />
    </div>
  );

}

export default App;
