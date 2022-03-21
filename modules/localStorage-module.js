import MyBook from './MyBook-module.js';
// update stored books by creating them asa a book object
const updateBookListFromLocalStorage = () => {
  const bookData = JSON.parse(localStorage.getItem('bookCollection'));
  bookData.forEach((bookData) => {
    const newBook = new MyBook(bookData.title, bookData.author, bookData.id);
    newBook.addBookToDom(); // append book to the DOM
  });
};

// check if there is a stored book or not
const prepareLocalStorage = () => (localStorage.getItem('bookCollection')
  ? updateBookListFromLocalStorage()
  : localStorage.setItem('bookCollection', JSON.stringify([])));

const ls = {
  prepare: prepareLocalStorage,
  update: updateBookListFromLocalStorage,
};

export default ls;