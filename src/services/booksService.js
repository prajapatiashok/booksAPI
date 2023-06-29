const path = require('path');
const Book = require('../entities/Book');
const booksFilePath = path.join(__dirname, '..', 'data', 'books.json');
const fs = require('fs');

// Service for retrieving the list of books
exports.getBooks = () => {
  const booksData = fs.readFileSync(booksFilePath, 'utf8');
  const books = JSON.parse(booksData).map((bookData) => new Book(bookData));
  return books;
};

// Service for retrieving the details of a single book
exports.getBookById = (bookId) => {
  const booksData = fs.readFileSync(booksFilePath, 'utf8');
  const books = JSON.parse(booksData).map((bookData) => new Book(bookData));
  const book = books.find((b) => b.id === bookId);
  return book;
};