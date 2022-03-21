import attr, { setAttributes } from './modules/attributes-module.js';
import ls from './modules/localStorage-module.js';
import { addNewBookEvent, updateSectionWithInnerHtml, AddSwapEvenForLinks } from './modules/methods-module.js';
import MyBook from './modules/MyBook-module.js';
import { DateTime } from './extra-modules/luxon.js';
// as as document becomes ready the following activity get executed
document.addEventListener('DOMContentLoaded', () => {
  // initialize attributes.
  setAttributes({
    lb: document.getElementById('list-of-books'),
    sb: document.querySelector('#storeBooks'),
    newBF: document.querySelector('#newBook'),
    nl: document.querySelectorAll('a'),
    emptyBookPH: '<p id=\'book-list-empty\'> Your Books list is empty, you can <a href=\'#new-book-section\'>click here</a> to add new</p>',
  });

  // check and update saved books
  ls.prepare();

  /*
- This function takes the form and a callback function
- Wrapping it in function is important because we might come up with
  multiple forms to add books in the future
- In that case we simply pass the form and the callback function
  */
  addNewBookEvent(attr.addBookForm, (title, author) => {
    new MyBook(title, author).addBookToDom();
  });

  // update the date to the navbar bottom using a luxon library
  const navBarDate = document.querySelector('#navbar-date');
  navBarDate.textContent = DateTime.now().toLocaleString();

  // activate the default section (list of books)
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