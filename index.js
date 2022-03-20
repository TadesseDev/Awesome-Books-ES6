import attr, { setAttributes } from './modules/attributes-module.js';
import ls from './modules/localStorage-module.js';
import { addNewBookEvent, swapSection, AddSwapEvenForLinks } from './modules/methods-module.js';
import MyBook from './modules/MyBook-module.js';

// as as document becomes ready the following activity get executed
document.addEventListener('DOMContentLoaded', () => {
  // set attributes to be used.
  setAttributes({
    lb: document.getElementById('list-of-books'),
    sb: document.querySelector('#storeBooks'),
    newBF: document.querySelector('#newBook'),
    nl: document.querySelectorAll('a'),
    emptyBookPH: '<p id=\'book-list-empty\'> Your Books list is empty, you can <a href=\'#new-book-section\'>click here</a> to add new</p>',
  });
  ls.prepare();

  /*
- this function takes a form and a callback function
- wrapping it in function is important because we might come up with multiple forms to add book in the future
- in that case we simply pass the from and the callback function
  */
  addNewBookEvent(attr.addBookForm, (title, author) => {
    const myNewBook = new MyBook(title, author);
    myNewBook.addBookToDom();
  });

  // activate the default section (list of books)
  // attr.listOfBooks.classList.add('active');
  swapSection(attr.listOfBooks);

  // for all navigation links attach section swap event
  for (let i = 0; i < attr.navLinks.length; i += 1) {
    const link = attr.navLinks[i];
    AddSwapEvenForLinks(link);
  }
});