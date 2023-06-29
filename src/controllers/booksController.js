const booksService = require('../services/booksService');

// Controller for retrieving the list of books
exports.getBooks = (req, res) => {
  const books = booksService.getBooks();
  res.json(books);
};

// Controller for retrieving the details of a single book
exports.getBookById = (req, res) => {
  const bookId = req.params.id;
  const book = booksService.getBookById(bookId);

  if (!book) {
    res.status(404).send('Book not found');
    return;
  }

  res.json(book);
};