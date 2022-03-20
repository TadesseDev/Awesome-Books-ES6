// attache add book event fo a given form
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

// Update any section with a given HTML
export const updateSectionWithInnerHtml = (section, innerHTML) => {
  section.innerHTML = innerHTML;
};

// Swap active section with the new section
export const swapSection = (newActiveSection) => {
  const oldActiveSection = document.querySelector('section.active');
  if (oldActiveSection) oldActiveSection.classList.toggle('active');
  newActiveSection.classList.add('active');
};

// Associate event for elements which are expected to switch a section
export function AddSwapEvenForLinks(NavLink) {
  NavLink.addEventListener('click', function addEvent(event) {
    event.preventDefault();
    const sectionName = this.getAttribute('href').replace('#', '');
    swapSection(document.getElementById(sectionName));
  });
}
