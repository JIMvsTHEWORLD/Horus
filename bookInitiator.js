const bookStub = require("./stubs/booksStub.js");
const bookInitiator = {};

bookInitiator.createBook = (req, res, next) => {
  const book = {
    title: req.body.title, 
    author: req.body.author,
    numberOfPages: req.body.numberOfPages,
    publisher: req.body.publisher,
    bookId: req.body.bookId
  }
  const callback = (error, data) => {
    res.locals.book = data
    if (error) console.log('sorry, there was an error', error)
    return next()
  }
  bookStub.CreateBook(book, callback)
}

bookInitiator.getBooks = (req, res, next) => {
  const callback = (error, data) => {
    res.locals.books = data
    if (error) console.log('sorry, there was an error', error)
    return next()
  }
  bookStub.GetBooks({}, callback)
}

bookInitiator.deleteBook = (req, res, next) => {
  bookId = {bookId: req.params.bookId}
  const callback = (error, data) => {
    if (error) console.log('sorry, there was an error', error)
    return next()
  }
  bookStub.DeleteBook(bookId, callback)
}

module.exports = bookInitiator;