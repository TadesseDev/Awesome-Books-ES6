import attr, { setAttributes } from './modules/attributes-module.js';
import ls from './modules/localStorage-module.js';
import { addNewBookEvent, updateSectionWithInnerHtml, AddSwapEvenForLinks } from './modules/methods-module.js';
// import { } from './modules/MyBook-module.js';

// as as document becomes ready the following activity get executed
document.addEventListener('DOMContentLoaded', () => {

  setAttributes({
    lb: document.getElementById('list-of-books'),
    sb: document.querySelector('#storeBooks'),
    newBF: document.querySelector('#newBook'),
    nl: document.querySelectorAll('a')
  });
  ls.prepare();
  console.log(attr);

  // associate event for the add new book form
  addNewBookEvent(attr.addBookForm);

  // activate the default active section
  attr.listOfBooks.classList.add('active');

  // if there is no book list Add special content prompting user to add book
  if (attr.storeBooks.childElementCount === 0) {
<<<<<<< HEAD
    updateSectionWithInnerHtml(attr.storeBooks, attr.emptyBookListPlaceHolder);
  }

  // for all navigation links attach section swap event
  for (let i = 0; i < attr.navLinks.length; i += 1) {
    const link = attr.navLinks[i];
=======
    updateSectionWithInnerHtml(storeBooks, emptyBookListPlaceHolder);
  }

  // for all navigation links attach section swap event 
  for (let i = 0; i < attr.navLinks.length; i += 1) {
    const link = navLinks[i];
>>>>>>> d56cbc6e9b7fdeb178fed61f3ff8315b062a6ff8
    AddSwapEvenForLinks(link);
  }
});