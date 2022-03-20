// import { } from './methods-module.js'
import MyBook from './MyBook-module.js';
// local storage managing functions functions
const updateBookListFromLocalStorage = () => {
  const bookData = JSON.parse(localStorage.getItem('bookCollection'));
  bookData.forEach((bookData) => {
    const newBook = new MyBook(bookData.title, bookData.author, bookData.id);
    newBook.addBookToDom(); // append book to the DOM
  });
};

const prepareLocalStorage = () => {
  // find and update local storage elements
  if (!localStorage.getItem('bookCollection')) {
    localStorage.setItem('bookCollection', JSON.stringify([]));
  } else {
    updateBookListFromLocalStorage();
  }
};
const ls = {
  prepare: prepareLocalStorage,
  update: updateBookListFromLocalStorage,
};
export default ls;