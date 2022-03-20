import attr from './attributes-module.js';
export const addNewBookEvent = (form, createBook) => {
  form.addEventListener('submit', function addEvent(event) {
    event.preventDefault();
    const title = this.elements[0].value;
    const author = this.elements[1].value;
    createBook(title, author);
    this.elements[0].value = '';
    this.elements[1].value = '';
  });
};

// update any section with a given HTML
export const updateSectionWithInnerHtml = (section, innerHTML) => {
  section.innerHTML = innerHTML;
};

// swap active section with the new section
export const swapSection = (newActiveSection) => {
  const oldActiveSection = document.querySelector('section.active');
  oldActiveSection && oldActiveSection.classList.toggle('active');
  newActiveSection.classList.add('active');

  // if there is no book list Add special content prompting user to add new book
  if (newActiveSection == attr.listOfBooks && attr.storeBooks.childElementCount === 0) {
    updateSectionWithInnerHtml(attr.storeBooks, attr.emptyBookText);
    const AddBookLink = attr.listOfBooks.querySelector('a');
    AddSwapEvenForLinks(AddBookLink);
  }
};

// associate event for the nav links and other elements if needed
export function AddSwapEvenForLinks(NavLink) {
  NavLink.addEventListener('click', function addEvent(event) {
    event.preventDefault();
    const sectionName = this.getAttribute('href').replace('#', '');
    swapSection(document.getElementById(sectionName));
  });
}

