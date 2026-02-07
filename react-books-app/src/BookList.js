import React from "react";

function BookList({ books }) {
  return (
    <div>
      {books.length === 0 ? (
        <p>Loading books...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Price ($)</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.yearOfLaunch}</td>
                <td>{book.price}</td>
                <td>{book.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;