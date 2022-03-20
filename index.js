import attr, { setAttributes } from './modules/attributes-module.js';
import ls from './modules/localStorage-module.js';
import { addNewBookEvent, updateSectionWithInnerHtml, AddSwapEvenForLinks } from './modules/methods-module.js';
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

  // associate event for the add new book form with a callback function
  addNewBookEvent(attr.addBookForm, (title, author) => {
    const myNewBook = new MyBook(title, author);
    myNewBook.addBookToDom();
  });

  // activate the default active section
  attr.listOfBooks.classList.add('active');

  // if there is no book list Add special content prompting user to add new book
  if (attr.storeBooks.childElementCount === 0) {
    updateSectionWithInnerHtml(attr.storeBooks, attr.emptyBookText);
    const AddBookLink = attr.listOfBooks.querySelector('a');
    AddSwapEvenForLinks(AddBookLink);
  }

  // for all navigation links attach section swap event
  for (let i = 0; i < attr.navLinks.length; i += 1) {
    const link = attr.navLinks[i];
    AddSwapEvenForLinks(link);
  }
});