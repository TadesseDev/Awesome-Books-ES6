const attributes = {
  listOfBooks: null,
  storeBooks: null,
  addBookForm: null,
  navLinks: null,
  emptyBookText: null,
};
const setAttributes = ({
  lb = null, sb = null, newBF = null, nl = [], emptyBookPH = null,
}) => {
  attributes.listOfBooks = lb;
  attributes.storeBooks = sb;
  attributes.addBookForm = newBF;
  attributes.navLinks = nl;
  attributes.emptyBookText = emptyBookPH;
};
export { attributes as default, setAttributes };