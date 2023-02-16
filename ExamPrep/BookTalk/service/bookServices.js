const Book = require("../models/book.js");

async function addBook(data, ownerId) {
  const payload = await Book.create({
    ...data,
    ownerId,
  });
}

async function getAllBooks() {
  const data = await Book.find({}).lean();
  return data;
}

async function getBookById(id) {
  const data = await Book.findById(id).lean();
  return data;
}

async function getBookOwner(id) {
  const data = await Book.findById(id).lean();
  return {
    bookOwnerId: data.ownerId.toString(),
    wishingList: data.wishingList.map((x) => x.toString()),
  };
}
async function getBookInstance(id) {
  const instance = await Book.findById(id);
  return instance;
}

// async function getWishedBooks(userId) {
//   const books = await getAllBooks();
//   console.log(books);

//   const userBooks = books.filter((el) => el.wishingList.some(userId));
//   console.log(userBooks);
//   return userBooks;
// }

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  getBookOwner,
  getBookInstance,
};
