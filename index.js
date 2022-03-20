import { } from './modules/attributes-module.js';
import { } from './modules/localStorage-module.js';
import { } from './modules/methods-module.js';
import { } from './modules/MyBook-module.js';

// as as document becomes ready the following activity get executed
document.addEventListener('DOMContentLoaded', () => {
  // find and update local storage elements
  prepareLocalStorage();
  // Initialize document objects
  nav = document.getElementById('navbar-container');
  listOfBooks = document.getElementById('list-of-books');
  storeBooks = document.querySelector('#storeBooks');
  addBookForm = document.querySelector('#newBook');
  navLinks = nav.querySelectorAll('a');
  // associate event for the add new book form
  addNewBookEvent(addBookForm);
  listOfBooks.classList.add('active');
  if (storeBooks.childElementCount === 0) {
    updateSectionWithInnerHtml(storeBooks, emptyBookListPlaceHolder);
  }

  for (let i = 0; i < navLinks.length; i += 1) {
    const link = navLinks[i];
    AddSwapEvenForLinks(link);
  }
});