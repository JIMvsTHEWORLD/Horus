const booksDb = require('../books/booksModel.js');
const customersDb = require('../customers/customersModel.js');
const path = require('path');
const fs = require('fs');

const testBooksJsonFile = path.resolve(__dirname, '../books/booksModel.test.json');
const testCustomersJsonFile = path.resolve(__dirname, '../customers/customersModel.test.json');

describe('booksDb unit tests', () => {
  beforeAll((done) => {
    fs.writeFile(testBooksJsonFile, JSON.stringify([]), () => {
      // booksDb.reset();
      done();
    });
  });

  afterAll((done) => {
      fs.writeFile(testBooksJsonFile, JSON.stringify([]), done);
  });

  describe('#sync', () => {
    it('writes a new book to the JSON file', () => {
      const book = [{title: 'Hello', author: 'World', numberOfPages: 400, publisher: 'Jimco', bookId: 0}];
      const result = booksDb.create(book);
      expect(result).not.toBeInstanceOf(Error)
      console.log('RESULT: ', result)
    });
    xit('has a title of Hello, an author of World, numberOfPages of 400, publisher of Jimco, and a bookId of 0', () =>{

    })
  })

})