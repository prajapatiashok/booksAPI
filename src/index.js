const path = require('path');
const express = require('express');
const booksController = require('./controllers/booksController');

const app = express();
app.use(express.json());

// const booksFilePath = path.join(__dirname, 'data', 'books.json');

app.get('/books', booksController.getBooks);
app.get('/books/:id', booksController.getBookById);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});