class Book {
  constructor(data) {
    this.id = data.id;
    this.imageUrl = data.imageUrl;
    this.title = data.title;
    this.description = data.description;
    this.percentage = data.percentage;
    this.cost = data.cost;
    this.comments = data.comments || [];
  }
}

module.exports = Book;