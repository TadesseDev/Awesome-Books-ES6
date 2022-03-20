export const addNewBookEvent = (form) => {
  const newBook = form;
  newBook.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.elements[0].value;
    const author = event.target.elements[1].value;
    const myNewBook = new MyBook(title, author);
    myNewBook.addBookToDom();
    event.target.elements[0].value = '';
    event.target.elements[1].value = '';
  });
};

export const swapSection = (newActiveSection) => {
  const oldActiveSection = document.querySelector('section.active');
  oldActiveSection.classList.toggle('active');
  newActiveSection.classList.add('active');
};

// associate event for the nav links and other elements if needed
export function AddSwapEvenForLinks(NavLink) {
  NavLink.addEventListener('click', function (event) {
    event.preventDefault();
    const sectionName = this.getAttribute('href').replace('#', '');
    swapSection(document.getElementById(sectionName));
  });
}

// update any section with a given HTML
export const updateSectionWithInnerHtml = (section, innerHTML) => {
  section.innerHTML = innerHTML;
};
