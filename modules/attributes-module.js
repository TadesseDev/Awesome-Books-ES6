
const attributes = {
  listOfBooks: null,
  storeBooks: null,
  addBookForm: null,
  navLinks: null,
  emptyBookListPlaceHolder: '<p id=\'book-list-empty\'> Your Books list is empty, you can <a href=\'#new-book-section\' onclick=\'AddSwapEvenForLinks(this)\'>click here</a> to add new</p>'
}
const setAttributes = ({ lb = null, sb = null, newBF = null, nl = [] }) => {
  attributes.listOfBooks = lb;
  attributes.storeBooks = sb;
  attributes.addBookForm = newBF;
  attributes.navLinks = nl;
}

export { attributes as default, setAttributes }