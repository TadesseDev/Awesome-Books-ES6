import attr from './attributes-module.js';
import { updateSectionWithInnerHtml, AddSwapEvenForLinks } from './methods-module.js';
// every book is Instance of a book class;
export default class MyBook {
  static listOfBook = [];

  static {
    this.updateLocalStorage = () => {
      localStorage.setItem('bookCollection', JSON.stringify(MyBook.listOfBook));
    };
    this.addBookToList = (book) => {
      this.listOfBook.push(book);
      this.updateLocalStorage();
    };
    this.removeBookFomList = (bookToRemove) => {
      this.listOfBook = this.listOfBook.filter((book) => book.id !== bookToRemove.id);
      this.updateLocalStorage();
    };
  }

  constructor(title, author, id = String(Date.now())) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.addBook(); // add book to Book list
  }

  addBook = () => {
    MyBook.addBookToList(this);
  }

  removeBook = () => {
    MyBook.removeBookFomList(this);
  }

  addBookToDom = () => {
    attr.storeBooks = attr.storeBooks || document.querySelector('#storeBooks');
    const placeHolder = document.getElementById('book-list-empty');
    if (placeHolder) {
      placeHolder.remove();
    }
    const bookForm = document.createElement('form');
    bookForm.setAttribute('id', this.id);
    const titleContainer = document.createElement('p');
    titleContainer.classList.add('title-author');
    titleContainer.textContent = String(`"${this.title}"`) + String(' by ') + String(`${this.author}`);
    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'remove');
    removeButton.textContent = 'Remove';
    bookForm.appendChild(titleContainer);
    bookForm.appendChild(removeButton);
    attr.storeBooks.appendChild(bookForm);
    bookForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this.removeBook();
      this.removeBookFromDom(attr.storeBooks);
    });
    MyBook.updateLocalStorage(this);
  };

  removeBookFromDom = (storeBooks) => {
    const book = document.getElementById(`${this.id}`);
    storeBooks.removeChild(book);
    if (attr.storeBooks.childElementCount === 0) {
      updateSectionWithInnerHtml(attr.storeBooks, attr.emptyBookText);
      const AddBookLink = attr.listOfBooks.querySelector('a');
      AddSwapEvenForLinks(AddBookLink);
    }
  };
}